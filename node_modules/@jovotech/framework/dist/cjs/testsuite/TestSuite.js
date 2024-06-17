"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSuite = void 0;
const common_1 = require("@jovotech/common");
const fs_1 = require("fs");
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const path_1 = require("path");
const uuid_1 = require("uuid");
const __1 = require("..");
const HandleRequest_1 = require("../HandleRequest");
const JovoInput_1 = require("../JovoInput");
const TestPlatform_1 = require("./TestPlatform");
const TestServer_1 = require("./TestServer");
class TestSuite extends __1.Plugin {
    constructor(config) {
        super(config);
        // Load app from configured stage and register testplugins
        this.app = this.config.app || this.loadApp();
        this.app.use(this, new TestPlatform_1.TestPlatform());
        const platform = new this.config.platform();
        this.requestBuilder = new platform.requestBuilder();
        const request = platform.createRequestInstance(this.requestBuilder.launch());
        const server = new TestServer_1.TestServer(request);
        const handleRequest = new HandleRequest_1.HandleRequest(this.app, server);
        Object.assign(this, new platform.jovoClass(this.app, handleRequest, platform));
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { afterEach, afterAll } = require('@jest/globals');
        if (this.config.data.deleteAfterEach) {
            afterEach(this.clearData.bind(this));
        }
        if (this.config.data.deleteAfterAll) {
            afterAll(this.clearData.bind(this));
        }
    }
    getDefaultConfig() {
        return {
            data: {
                deleteAfterEach: true,
                deleteAfterAll: true,
            },
            userId: (0, uuid_1.v4)(),
            platform: TestPlatform_1.TestPlatform,
            stage: 'dev',
            locale: 'en',
        };
    }
    install(app) {
        app.middlewareCollection.use('before.request.start', this.prepareRequest.bind(this));
        app.middlewareCollection.use('after.response.end', this.postProcess.bind(this));
    }
    async run(requestOrInput) {
        const requests = Array.isArray(requestOrInput) ? requestOrInput : [requestOrInput];
        for (const requestLike of requests) {
            const isInputInstance = (input) => input instanceof JovoInput_1.JovoInput;
            const isInputObject = (input) => !isInputInstance(input) &&
                Object.keys(input).some((key) => ['type', 'asr', 'nlu', 'intent', 'entities', 'text', 'audio'].includes(key));
            const isRequestObject = (request) => {
                return (!(request instanceof __1.JovoRequest) && !isInputInstance(request) && !isInputObject(request));
            };
            // If requestOrInput is a plain object, generate a corresponding
            // instance from it
            this.requestOrInput = isInputObject(requestLike)
                ? new JovoInput_1.JovoInput(requestLike)
                : isRequestObject(requestLike)
                    ? this.$platform.createRequestInstance(requestLike)
                    : requestLike;
            await this.app.initialize();
            const request = this.isRequest(this.requestOrInput)
                ? this.requestOrInput
                : this.requestOrInput.type === common_1.InputType.Launch
                    ? this.requestBuilder.launch()
                    : this.requestBuilder.intent();
            await this.app.handle(new TestServer_1.TestServer(request));
        }
        return {
            response: this.$response,
            output: this.$output,
        };
    }
    clearData() {
        this.$user = this.$platform.createUserInstance(this);
        this.$session = new __1.JovoSession();
        this.$request = this.$platform.createRequestInstance({});
        this.$app.data = {};
    }
    prepareRequest(jovo) {
        // Reset session data if a new session is incoming
        if (jovo.$request.isNewSession() || jovo.$input.type === common_1.InputType.Launch) {
            this.$session = new __1.JovoSession();
        }
        if (!this.isRequest(this.requestOrInput)) {
            jovo.$input = this.requestOrInput;
            jovo.$entities = jovo.getEntityMap();
        }
        jovo.$user.isNew = this.$user.isNew;
        (0, lodash_merge_1.default)(jovo.$user.data, this.$user.data);
        (0, lodash_merge_1.default)(jovo.$session, this.$session);
        (0, lodash_merge_1.default)(jovo.$request, this.$request);
        (0, lodash_merge_1.default)(jovo.$data, this.$data);
        (0, lodash_merge_1.default)(jovo.$app.data, this.$app.data);
        jovo.$request.setUserId(this.config.userId);
        jovo.$request.setLocale(this.config.locale);
    }
    postProcess(jovo) {
        // Set session data
        jovo.$session.isNew = false;
        this.$user.data = jovo.$user.data;
        this.$session = jovo.$session;
        this.$response = jovo.$response;
        this.$output = jovo.$output;
        this.$data = {}; // Request data is only available for one request, @see https://www.jovo.tech/docs/data#request-data
    }
    loadApp() {
        const appDirectory = [process.cwd(), 'src'];
        const { stage } = this.config;
        const appFileNames = [`app.${stage}.ts`, `app.${stage}.js`, 'app.ts', 'app.js'];
        for (const appFileName of appFileNames) {
            const appFilePath = (0, path_1.join)(...appDirectory, appFileName);
            if ((0, fs_1.existsSync)(appFilePath)) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-var-requires
                    const { app } = require(appFilePath);
                    if (!app) {
                        continue;
                    }
                    // TODO: Instead of cloning the entire app, it'd be sufficient to
                    // implement app.middlewareCollection.once() to run handlers once per lifecycle
                    return (0, lodash_clonedeep_1.default)(app);
                }
                catch (error) {
                    throw new common_1.JovoError({ message: `Failed to load app: ${error.message}` });
                }
            }
        }
        throw new common_1.JovoError({
            message: 'App not found.',
            hint: 'Try running your tests in the root directory of your project',
        });
    }
    isRequest(request) {
        return request instanceof __1.JovoRequest;
    }
}
exports.TestSuite = TestSuite;
//# sourceMappingURL=TestSuite.js.map