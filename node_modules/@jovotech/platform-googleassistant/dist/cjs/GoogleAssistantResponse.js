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
exports.GoogleAssistantResponse = void 0;
const output_1 = require("@jovotech/output");
const output_2 = require("./output");
class GoogleAssistantResponse extends output_1.JovoResponse {
    hasSessionEnded() {
        var _a, _b;
        return ((_b = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.name) === 'actions.scene.END_CONVERSATION';
    }
    getSpeech() {
        var _a, _b, _c, _d, _e, _f;
        // Usually, Google Assistant Jovo responses only contain firstSimple,
        // so in most cases, this method will return a string.
        // In case lastSimple is available as well, both values are returned as an array
        if (((_b = (_a = this.prompt) === null || _a === void 0 ? void 0 : _a.firstSimple) === null || _b === void 0 ? void 0 : _b.speech) && ((_d = (_c = this.prompt) === null || _c === void 0 ? void 0 : _c.lastSimple) === null || _d === void 0 ? void 0 : _d.speech)) {
            return [this.prompt.firstSimple.speech, this.prompt.lastSimple.speech];
        }
        return (_f = (_e = this.prompt) === null || _e === void 0 ? void 0 : _e.firstSimple) === null || _f === void 0 ? void 0 : _f.speech;
    }
    getReprompt() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        // In the GoogleAssistantOutputTemplateConverterStrategy, all 3 reprompt values are the same,
        // so in most cases, this will return a string of the common value.
        // If the values differ, the method returns an array with all strings
        if (
        // TODO: Clean this up a little
        ((_b = (_a = this.session) === null || _a === void 0 ? void 0 : _a.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _b === void 0 ? void 0 : _b.NO_INPUT_1) &&
            ((_d = (_c = this.session) === null || _c === void 0 ? void 0 : _c.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _d === void 0 ? void 0 : _d.NO_INPUT_1) ===
                ((_f = (_e = this.session) === null || _e === void 0 ? void 0 : _e.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _f === void 0 ? void 0 : _f.NO_INPUT_2) &&
            ((_h = (_g = this.session) === null || _g === void 0 ? void 0 : _g.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _h === void 0 ? void 0 : _h.NO_INPUT_1) ===
                ((_k = (_j = this.session) === null || _j === void 0 ? void 0 : _j.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _k === void 0 ? void 0 : _k.NO_INPUT_FINAL)) {
            return [
                this.session.params._GOOGLE_ASSISTANT_REPROMPTS_.NO_INPUT_1,
                this.session.params._GOOGLE_ASSISTANT_REPROMPTS_.NO_INPUT_2,
                this.session.params._GOOGLE_ASSISTANT_REPROMPTS_.NO_INPUT_FINAL,
            ];
        }
        return (_m = (_l = this.session) === null || _l === void 0 ? void 0 : _l.params._GOOGLE_ASSISTANT_REPROMPTS_) === null || _m === void 0 ? void 0 : _m.NO_INPUT_1;
    }
    replaceSpeech(speech) {
        var _a, _b;
        // Usually, Google Assistant Jovo responses only contain firstSimple,
        // so in most cases, this method will accept a string and replace firstSimple.speech.
        // In case lastSimple is available as well, this method can accept an array
        const firstSimpleSpeech = Array.isArray(speech) ? speech[0] : speech;
        if ((_a = this.prompt) === null || _a === void 0 ? void 0 : _a.firstSimple) {
            this.prompt.firstSimple.speech = firstSimpleSpeech;
        }
        const lastSimpleSpeech = Array.isArray(speech) && speech.length > 1 ? speech[1] : undefined;
        if (((_b = this.prompt) === null || _b === void 0 ? void 0 : _b.lastSimple) && lastSimpleSpeech) {
            this.prompt.lastSimple.speech = lastSimpleSpeech;
        }
    }
    replaceReprompt(reprompt) {
        // In the GoogleAssistantOutputTemplateConverterStrategy, all 3 reprompt values are the same,
        // so the main use case is passing a single reprompt, which is then replacing all values.
        // However, if an array with 3 elements is passed, the values are replaced accordingly.
        if (this.session) {
            if (Array.isArray(reprompt) && reprompt.length > 2) {
                this.session.params._GOOGLE_ASSISTANT_REPROMPTS_ = {
                    NO_INPUT_1: reprompt[0],
                    NO_INPUT_2: reprompt[1],
                    NO_INPUT_FINAL: reprompt[2],
                };
            }
            // TODO: Clean this up a little
            this.session.params._GOOGLE_ASSISTANT_REPROMPTS_ = {
                NO_INPUT_1: Array.isArray(reprompt) ? reprompt[0] : reprompt,
                NO_INPUT_2: Array.isArray(reprompt) ? reprompt[0] : reprompt,
                NO_INPUT_FINAL: Array.isArray(reprompt) ? reprompt[0] : reprompt,
            };
        }
    }
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Prompt),
    __metadata("design:type", output_2.Prompt)
], GoogleAssistantResponse.prototype, "prompt", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Scene),
    __metadata("design:type", output_2.Scene)
], GoogleAssistantResponse.prototype, "scene", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Session),
    __metadata("design:type", output_2.Session)
], GoogleAssistantResponse.prototype, "session", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.User),
    __metadata("design:type", output_2.User)
], GoogleAssistantResponse.prototype, "user", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Home),
    __metadata("design:type", output_2.Home)
], GoogleAssistantResponse.prototype, "home", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Device),
    __metadata("design:type", output_2.Device)
], GoogleAssistantResponse.prototype, "device", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => output_2.Expected),
    __metadata("design:type", output_2.Expected)
], GoogleAssistantResponse.prototype, "expected", void 0);
exports.GoogleAssistantResponse = GoogleAssistantResponse;
//# sourceMappingURL=GoogleAssistantResponse.js.map