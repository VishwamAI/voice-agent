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
exports.BodyTemplate6 = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../../constants");
const MainTextMaxLength_1 = require("../../../decorators/validation/MainTextMaxLength");
const Image_1 = require("../../common/Image");
const DisplayTemplate_1 = require("../DisplayTemplate");
const TextContent_1 = require("../TextContent");
class BodyTemplate6 {
}
__decorate([
    (0, output_1.Equals)(DisplayTemplate_1.DisplayTemplateType.Body6),
    __metadata("design:type", String)
], BodyTemplate6.prototype, "type", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BodyTemplate6.prototype, "token", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(DisplayTemplate_1.BackButtonVisibility),
    __metadata("design:type", String)
], BodyTemplate6.prototype, "backButton", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], BodyTemplate6.prototype, "backgroundImage", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], BodyTemplate6.prototype, "image", void 0);
__decorate([
    (0, MainTextMaxLength_1.MainTextMaxLength)(constants_1.BODY_TEMPLATE_MAIN_TEXT_MAX_LENGTH),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => TextContent_1.TextContent),
    __metadata("design:type", TextContent_1.TextContent)
], BodyTemplate6.prototype, "textContent", void 0);
exports.BodyTemplate6 = BodyTemplate6;
//# sourceMappingURL=BodyTemplate6.js.map