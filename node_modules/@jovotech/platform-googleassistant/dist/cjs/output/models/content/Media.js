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
exports.Media = exports.MediaObject = exports.MediaImage = exports.OptionalMediaControls = exports.MediaType = void 0;
const output_1 = require("@jovotech/output");
const IsValidMediaObjectImage_1 = require("../../decorators/validation/IsValidMediaObjectImage");
const Image_1 = require("../common/Image");
var MediaType;
(function (MediaType) {
    MediaType["Unspecified"] = "MEDIA_TYPE_UNSPECIFIED";
    MediaType["Audio"] = "AUDIO";
    MediaType["MediaStatusAck"] = "MEDIA_STATUS_ACK";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
var OptionalMediaControls;
(function (OptionalMediaControls) {
    OptionalMediaControls["Unspecified"] = "OPTIONAL_MEDIA_CONTROLS_UNSPECIFIED";
    OptionalMediaControls["Paused"] = "PAUSED";
    OptionalMediaControls["Stopped"] = "STOPPED";
})(OptionalMediaControls = exports.OptionalMediaControls || (exports.OptionalMediaControls = {}));
class MediaImage {
}
__decorate([
    (0, IsValidMediaObjectImage_1.IsValidMediaObjectImage)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], MediaImage.prototype, "large", void 0);
__decorate([
    (0, IsValidMediaObjectImage_1.IsValidMediaObjectImage)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], MediaImage.prototype, "icon", void 0);
exports.MediaImage = MediaImage;
class MediaObject {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], MediaObject.prototype, "name", void 0);
__decorate([
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], MediaObject.prototype, "description", void 0);
__decorate([
    (0, output_1.IsUrl)({ protocols: ['https', 'http'] }),
    __metadata("design:type", String)
], MediaObject.prototype, "url", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => MediaImage),
    __metadata("design:type", MediaImage)
], MediaObject.prototype, "image", void 0);
exports.MediaObject = MediaObject;
class Media {
}
__decorate([
    (0, output_1.IsEnum)(MediaType),
    __metadata("design:type", String)
], Media.prototype, "mediaType", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Media.prototype, "startOffset", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsEnum)(OptionalMediaControls, { each: true }),
    __metadata("design:type", Array)
], Media.prototype, "optionalMediaControls", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => MediaObject),
    __metadata("design:type", Array)
], Media.prototype, "mediaObjects", void 0);
exports.Media = Media;
//# sourceMappingURL=Media.js.map