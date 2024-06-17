"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaResponse = void 0;
const output_1 = require("@jovotech/output");
const output_2 = require("./output");
class AlexaResponse extends output_1.JovoResponse {
    hasSessionEnded() {
        return !!this.response.shouldEndSession;
    }
    getSpeech() {
        var _a;
        return (_a = this.response.outputSpeech) === null || _a === void 0 ? void 0 : _a.ssml;
    }
    getReprompt() {
        var _a, _b;
        return (_b = (_a = this.response.reprompt) === null || _a === void 0 ? void 0 : _a.outputSpeech) === null || _b === void 0 ? void 0 : _b.ssml;
    }
    replaceSpeech(speech) {
        // For consistency with JovoResponse, this method can also accept a string of arrays
        // However, Alexa responses use only 1 speech element, so the first item is used
        const message = Array.isArray(speech) ? speech[0] : speech;
        this.response.outputSpeech = (0, output_2.convertMessageToOutputSpeech)(message);
    }
    replaceReprompt(reprompt) {
        // For consistency with JovoResponse, this method can also accept a string of arrays
        // However, Alexa responses use only 1 reprompt element, so the first item is used
        const message = Array.isArray(reprompt) ? reprompt[0] : reprompt;
        this.response.reprompt = { outputSpeech: (0, output_2.convertMessageToOutputSpeech)(message) };
    }
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AlexaResponse.prototype, "version", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], AlexaResponse.prototype, "sessionAttributes", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Response),
    __metadata("design:type", output_2.Response)
], AlexaResponse.prototype, "response", void 0);
exports.AlexaResponse = AlexaResponse;
//# sourceMappingURL=AlexaResponse.js.map