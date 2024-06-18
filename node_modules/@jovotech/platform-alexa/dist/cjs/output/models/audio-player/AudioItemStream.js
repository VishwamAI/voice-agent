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
exports.AudioItemStream = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
const AudioItemStreamCaption_1 = require("./AudioItemStreamCaption");
class AudioItemStream {
}
__decorate([
    (0, output_1.IsUrl)({ protocols: ['https'] }),
    __metadata("design:type", String)
], AudioItemStream.prototype, "url", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    (0, output_1.MaxLength)(constants_1.AUDIO_STREAM_TOKEN_MAX_LENGTH),
    __metadata("design:type", String)
], AudioItemStream.prototype, "token", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    (0, output_1.MaxLength)(constants_1.AUDIO_STREAM_TOKEN_MAX_LENGTH),
    __metadata("design:type", String)
], AudioItemStream.prototype, "expectedPreviousToken", void 0);
__decorate([
    (0, output_1.IsNumber)(),
    __metadata("design:type", Number)
], AudioItemStream.prototype, "offsetInMilliseconds", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => AudioItemStreamCaption_1.AudioItemStreamCaption),
    __metadata("design:type", AudioItemStreamCaption_1.AudioItemStreamCaption)
], AudioItemStream.prototype, "caption", void 0);
exports.AudioItemStream = AudioItemStream;
//# sourceMappingURL=AudioItemStream.js.map