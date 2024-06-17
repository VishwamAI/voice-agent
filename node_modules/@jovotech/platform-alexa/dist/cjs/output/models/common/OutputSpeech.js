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
exports.OutputSpeech = exports.PlayBehavior = exports.OutputSpeechType = void 0;
const output_1 = require("@jovotech/output");
const IsValidOutputSpeechString_1 = require("../../decorators/validation/IsValidOutputSpeechString");
var OutputSpeechType;
(function (OutputSpeechType) {
    OutputSpeechType["Plain"] = "PlainText";
    OutputSpeechType["Ssml"] = "SSML";
})(OutputSpeechType = exports.OutputSpeechType || (exports.OutputSpeechType = {}));
var PlayBehavior;
(function (PlayBehavior) {
    PlayBehavior["Enqueue"] = "ENQUEUE";
    PlayBehavior["ReplaceAll"] = "REPLACE_ALL";
    PlayBehavior["ReplaceEnqueued"] = "REPLACE_ENQUEUED";
})(PlayBehavior = exports.PlayBehavior || (exports.PlayBehavior = {}));
class OutputSpeech {
    toMessage() {
        if (this.type === OutputSpeechType.Ssml && this.ssml) {
            return {
                speech: this.ssml,
            };
        }
        if (this.type === OutputSpeechType.Plain && this.text) {
            return {
                text: this.text,
            };
        }
        return '';
    }
}
__decorate([
    (0, output_1.IsEnum)(OutputSpeechType),
    __metadata("design:type", String)
], OutputSpeech.prototype, "type", void 0);
__decorate([
    (0, IsValidOutputSpeechString_1.IsValidOutputSpeechString)(OutputSpeechType.Plain),
    __metadata("design:type", Object)
], OutputSpeech.prototype, "text", void 0);
__decorate([
    (0, IsValidOutputSpeechString_1.IsValidOutputSpeechString)(OutputSpeechType.Ssml),
    __metadata("design:type", Object)
], OutputSpeech.prototype, "ssml", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(PlayBehavior),
    __metadata("design:type", String)
], OutputSpeech.prototype, "playBehavior", void 0);
exports.OutputSpeech = OutputSpeech;
//# sourceMappingURL=OutputSpeech.js.map