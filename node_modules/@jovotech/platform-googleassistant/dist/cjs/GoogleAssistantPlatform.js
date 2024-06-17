"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAssistantPlatform = void 0;
const framework_1 = require("@jovotech/framework");
const lodash_mergewith_1 = __importDefault(require("lodash.mergewith"));
const uuid_1 = require("uuid");
const GoogleAssistant_1 = require("./GoogleAssistant");
const GoogleAssistantDevice_1 = require("./GoogleAssistantDevice");
const GoogleAssistantRepromptComponent_1 = require("./GoogleAssistantRepromptComponent");
const GoogleAssistantRequest_1 = require("./GoogleAssistantRequest");
const GoogleAssistantRequestBuilder_1 = require("./GoogleAssistantRequestBuilder");
const GoogleAssistantUser_1 = require("./GoogleAssistantUser");
const output_1 = require("./output");
class GoogleAssistantPlatform extends framework_1.Platform {
    constructor() {
        super(...arguments);
        this.id = 'googleAssistant';
        this.outputTemplateConverterStrategy = new output_1.GoogleAssistantOutputTemplateConverterStrategy();
        this.requestClass = GoogleAssistantRequest_1.GoogleAssistantRequest;
        this.jovoClass = GoogleAssistant_1.GoogleAssistant;
        this.userClass = GoogleAssistantUser_1.GoogleAssistantUser;
        this.deviceClass = GoogleAssistantDevice_1.GoogleAssistantDevice;
        this.requestBuilder = GoogleAssistantRequestBuilder_1.GoogleAssistantRequestBuilder;
    }
    getDefaultConfig() {
        return {};
    }
    mount(parent) {
        super.mount(parent);
        parent.middlewareCollection.use('before.request.start', (jovo) => {
            var _a, _b;
            if (((_b = (_a = jovo.$googleAssistant) === null || _a === void 0 ? void 0 : _a.$request.intent) === null || _b === void 0 ? void 0 : _b.name) === 'actions.intent.HEALTH_CHECK') {
                jovo.$handleRequest.stopMiddlewareExecution();
                return jovo.$handleRequest.server.setResponse({
                    prompt: { override: true, firstSimple: { speech: 'ok', text: '' } },
                });
            }
        });
        this.middlewareCollection.use('request.start', (jovo) => {
            return this.onRequestStart(jovo);
        });
    }
    initialize(parent) {
        parent.use(GoogleAssistantRepromptComponent_1.GoogleAssistantRepromptComponent);
    }
    isRequestRelated(request) {
        return request.user && request.session && request.handler && request.device;
    }
    isResponseRelated(response) {
        return response.user && response.session && response.prompt;
    }
    finalizeResponse(response, googleAssistant) {
        var _a;
        const requestSession = googleAssistant.$request.session || {};
        const responseSession = response.session || {};
        response.session = (0, lodash_mergewith_1.default)(Object.assign({ id: '', languageCode: '' }, requestSession), responseSession, { params: Object.assign({}, googleAssistant.$session) }, (objValue, srcValue) => {
            if (typeof objValue === 'string' && typeof srcValue === 'string') {
                return objValue ? objValue : srcValue;
            }
            // Replaces full array with the value furthest to the right. No concatenation of array values.
            if (Array.isArray(objValue) && Array.isArray(srcValue)) {
                return srcValue;
            }
        });
        if (googleAssistant.$request.user) {
            response.user = Object.assign({}, googleAssistant.$request.user);
        }
        if (response.scene && ((_a = googleAssistant.$request.scene) === null || _a === void 0 ? void 0 : _a.name)) {
            response.scene.name = googleAssistant.$request.scene.name;
        }
        return response;
    }
    onRequestStart(jovo) {
        var _a, _b, _c, _d, _e, _f, _g;
        const user = (_a = jovo.$googleAssistant) === null || _a === void 0 ? void 0 : _a.$user;
        // if the user is linked and has no user id, generate one
        if (user && user.isVerified() && !user.id) {
            user.setId((0, uuid_1.v4)());
        }
        const request = (_b = jovo.$googleAssistant) === null || _b === void 0 ? void 0 : _b.$request;
        // if it is a selection-event
        if ((request === null || request === void 0 ? void 0 : request.intent) &&
            !((_c = request === null || request === void 0 ? void 0 : request.intent) === null || _c === void 0 ? void 0 : _c.name) &&
            !!((_d = request.scene) === null || _d === void 0 ? void 0 : _d.slotFillingStatus) &&
            Object.keys(((_e = request.intent) === null || _e === void 0 ? void 0 : _e.params) || {}).length &&
            ((_g = (_f = request.session) === null || _f === void 0 ? void 0 : _f.params) === null || _g === void 0 ? void 0 : _g._GOOGLE_ASSISTANT_SELECTION_INTENT_)) {
            jovo.$input.intent = request.session.params._GOOGLE_ASSISTANT_SELECTION_INTENT_;
            delete request.session.params._GOOGLE_ASSISTANT_SELECTION_INTENT_;
        }
    }
}
exports.GoogleAssistantPlatform = GoogleAssistantPlatform;
//# sourceMappingURL=GoogleAssistantPlatform.js.map