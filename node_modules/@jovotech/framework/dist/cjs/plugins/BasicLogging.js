"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicLogging = void 0;
const chalk_1 = __importDefault(require("chalk"));
const json_colorizer_1 = __importDefault(require("json-colorizer"));
const enums_1 = require("../enums");
const Plugin_1 = require("../Plugin");
const utilities_1 = require("../utilities");
class BasicLogging extends Plugin_1.Plugin {
    getDefaultConfig() {
        return {
            skipTests: true,
            enabled: true,
            request: {
                enabled: true,
                excludedObjects: [],
                maskedObjects: [],
                objects: [],
            },
            response: {
                enabled: true,
                excludedObjects: [],
                maskedObjects: [],
                objects: [],
            },
            format: enums_1.LoggingFormat.Pretty,
            styling: true,
            maskValue: '[ Hidden ]',
            indentation: 2,
            colorizeSettings: {
                colors: {
                    STRING_KEY: 'white',
                    STRING_LITERAL: 'green',
                    NUMBER_LITERAL: 'yellow',
                    BRACE: 'white.bold',
                },
            },
        };
    }
    constructor(config) {
        if ((config === null || config === void 0 ? void 0 : config.enabled) === false) {
            if (typeof config.request === 'undefined') {
                config.request = false;
            }
            if (typeof config.response === 'undefined') {
                config.response = false;
            }
        }
        super(config);
        if (typeof this.config.request === 'boolean') {
            this.config.request = {
                objects: [],
                maskedObjects: [],
                excludedObjects: [],
                enabled: this.config.request,
            };
        }
        if (typeof this.config.response === 'boolean') {
            this.config.response = {
                objects: [],
                maskedObjects: [],
                excludedObjects: [],
                enabled: this.config.response,
            };
        }
    }
    mount(parent) {
        parent.middlewareCollection.use('request.start', (jovo) => {
            if (this.config.request.enabled) {
                return this.logRequest(jovo);
            }
        });
        parent.middlewareCollection.use('response.end', (jovo) => {
            if (this.config.response.enabled) {
                return this.logResponse(jovo);
            }
        });
    }
    async logRequest(jovo) {
        jovo.$data._BASIC_LOGGING_START = new Date().getTime();
        const requestConfig = this.config.request;
        const requestCopy = (0, utilities_1.copy)(jovo.$request, {
            include: requestConfig.objects,
            exclude: requestConfig.excludedObjects,
        });
        // Mask properties according to configuration
        if (requestConfig.maskedObjects && requestConfig.maskedObjects.length > 0) {
            (0, utilities_1.mask)(requestCopy, requestConfig.maskedObjects, this.config.maskValue);
        }
        if (this.config.format === enums_1.LoggingFormat.Pretty) {
            if (this.config.styling) {
                // eslint-disable-next-line no-console
                console.log(chalk_1.default.bgWhite.black('\n\n >>>>> Request - ' + new Date().toISOString() + ' '));
            }
            // eslint-disable-next-line no-console
            console.log((0, json_colorizer_1.default)(JSON.stringify(requestCopy, null, this.config.indentation || 2), this.config.colorizeSettings));
        }
        else if (this.config.format === enums_1.LoggingFormat.Json) {
            // eslint-disable-next-line no-console
            console.log((0, json_colorizer_1.default)(JSON.stringify(requestCopy), this.config.colorizeSettings));
        }
    }
    async logResponse(jovo) {
        const basicLoggingEnd = new Date().getTime();
        const duration = jovo.$data._BASIC_LOGGING_START
            ? basicLoggingEnd - jovo.$data._BASIC_LOGGING_START
            : 0;
        const responseConfig = this.config.response;
        const responseCopy = (0, utilities_1.copy)(jovo.$response, {
            include: responseConfig.objects,
            exclude: responseConfig.excludedObjects,
        });
        if (responseConfig.maskedObjects && responseConfig.maskedObjects.length > 0) {
            (0, utilities_1.mask)(responseCopy, responseConfig.maskedObjects, this.config.maskValue);
        }
        if (this.config.format === enums_1.LoggingFormat.Pretty) {
            // eslint-disable-next-line no-console
            console.log(chalk_1.default.bgGray.white('\n\n <<<<< Response - ' + new Date().toISOString() + ' ') +
                ' ✔️ ' +
                duration +
                'ms');
            // eslint-disable-next-line no-console
            console.log((0, json_colorizer_1.default)(JSON.stringify(responseCopy, null, this.config.indentation || 2), this.config.colorizeSettings));
        }
        else if (this.config.format === enums_1.LoggingFormat.Json) {
            // eslint-disable-next-line no-console
            console.log((0, json_colorizer_1.default)(JSON.stringify(responseCopy), this.config.colorizeSettings));
        }
    }
}
exports.BasicLogging = BasicLogging;
//# sourceMappingURL=BasicLogging.js.map