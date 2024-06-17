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
exports.AudioItem = void 0;
const output_1 = require("@jovotech/output");
const AudioItemMetadata_1 = require("./AudioItemMetadata");
const AudioItemStream_1 = require("./AudioItemStream");
class AudioItem {
}
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => AudioItemStream_1.AudioItemStream),
    __metadata("design:type", AudioItemStream_1.AudioItemStream)
], AudioItem.prototype, "stream", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => AudioItemMetadata_1.AudioItemMetadata),
    __metadata("design:type", AudioItemMetadata_1.AudioItemMetadata)
], AudioItem.prototype, "metadata", void 0);
exports.AudioItem = AudioItem;
//# sourceMappingURL=AudioItem.js.map