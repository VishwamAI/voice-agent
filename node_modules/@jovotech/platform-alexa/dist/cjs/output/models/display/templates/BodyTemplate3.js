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
exports.BodyTemplate3 = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../../constants");
const Image_1 = require("../../common/Image");
const DisplayTemplate_1 = require("../DisplayTemplate");
const TextContent_1 = require("../TextContent");
class BodyTemplate3 {
}
__decorate([
    (0, output_1.Equals)(DisplayTemplate_1.DisplayTemplateType.Body3),
    __metadata("design:type", String)
], BodyTemplate3.prototype, "type", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BodyTemplate3.prototype, "token", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(DisplayTemplate_1.BackButtonVisibility),
    __metadata("design:type", String)
], BodyTemplate3.prototype, "backButton", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], BodyTemplate3.prototype, "backgroundImage", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    (0, output_1.MaxLength)(constants_1.DISPLAY_TEMPLATE_TITLE_MAX_LENGTH),
    __metadata("design:type", String)
], BodyTemplate3.prototype, "title", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], BodyTemplate3.prototype, "image", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => TextContent_1.TextContent),
    __metadata("design:type", TextContent_1.TextContent)
], BodyTemplate3.prototype, "textContent", void 0);
exports.BodyTemplate3 = BodyTemplate3;
//# sourceMappingURL=BodyTemplate3.js.map