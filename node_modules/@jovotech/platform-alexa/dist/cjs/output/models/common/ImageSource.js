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
exports.ImageSource = exports.ImageSourceSize = void 0;
const output_1 = require("@jovotech/output");
var ImageSourceSize;
(function (ImageSourceSize) {
    ImageSourceSize["ExtraSmall"] = "X_SMALL";
    ImageSourceSize["Small"] = "SMALL";
    ImageSourceSize["Medium"] = "MEDIUM";
    ImageSourceSize["Large"] = "LARGE";
    ImageSourceSize["ExtraLarge"] = "X_LARGE";
})(ImageSourceSize = exports.ImageSourceSize || (exports.ImageSourceSize = {}));
class ImageSource {
}
__decorate([
    (0, output_1.IsUrl)({ protocols: ['https'] }),
    __metadata("design:type", String)
], ImageSource.prototype, "url", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(ImageSourceSize),
    __metadata("design:type", String)
], ImageSource.prototype, "size", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsInt)(),
    __metadata("design:type", Number)
], ImageSource.prototype, "widthPixels", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsInt)(),
    __metadata("design:type", Number)
], ImageSource.prototype, "heightPixels", void 0);
exports.ImageSource = ImageSource;
//# sourceMappingURL=ImageSource.js.map