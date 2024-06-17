"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaPlatform = void 0;
const framework_1 = require("@jovotech/framework");
const Alexa_1 = require("./Alexa");
const AlexaDevice_1 = require("./AlexaDevice");
const AlexaRequest_1 = require("./AlexaRequest");
const AlexaRequestBuilder_1 = require("./AlexaRequestBuilder");
const AlexaUser_1 = require("./AlexaUser");
const output_1 = require("./output");
class AlexaPlatform extends framework_1.Platform {
    constructor() {
        super(...arguments);
        this.id = 'alexa';
        this.outputTemplateConverterStrategy = new output_1.AlexaOutputTemplateConverterStrategy();
        this.requestClass = AlexaRequest_1.AlexaRequest;
        this.jovoClass = Alexa_1.Alexa;
        this.userClass = AlexaUser_1.AlexaUser;
        this.deviceClass = AlexaDevice_1.AlexaDevice;
        this.requestBuilder = AlexaRequestBuilder_1.AlexaRequestBuilder;
    }
    getDefaultConfig() {
        return {
            intentMap: {
                'AMAZON.StopIntent': 'END',
                'AMAZON.CancelIntent': 'END',
            },
            output: {
                genericOutputToApl: true,
            },
        };
    }
    getInitConfig() {
        return {
            intentMap: {
                'AMAZON.StopIntent': 'END',
                'AMAZON.CancelIntent': 'END',
            },
        };
    }
    mount(parent) {
        super.mount(parent);
        this.middlewareCollection.use('request.start', (jovo) => {
            return this.onRequestStart(jovo);
        });
    }
    isRequestRelated(request) {
        return request.version && request.request && request.request.requestId;
    }
    isResponseRelated(response) {
        return response.version && response.response;
    }
    finalizeResponse(response, alexaSkill) {
        response.sessionAttributes = alexaSkill.$session;
        return response;
    }
    onRequestStart(jovo) {
        var _a, _b, _c, _d;
        // Generate generic output to APL if supported and set in config
        this.outputTemplateConverterStrategy.config.genericOutputToApl = !!(((_b = (_a = jovo.$alexa) === null || _a === void 0 ? void 0 : _a.$request) === null || _b === void 0 ? void 0 : _b.isAplSupported()) && ((_c = this.config.output) === null || _c === void 0 ? void 0 : _c.genericOutputToApl));
        this.outputTemplateConverterStrategy.config.aplTemplates = (_d = this.config.output) === null || _d === void 0 ? void 0 : _d.aplTemplates;
    }
}
exports.AlexaPlatform = AlexaPlatform;
//# sourceMappingURL=AlexaPlatform.js.map