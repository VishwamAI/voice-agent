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
exports.DisplayTemplateList1Item = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../../constants");
const MainTextMaxLength_1 = require("../../../decorators/validation/MainTextMaxLength");
const Image_1 = require("../../common/Image");
const TextContent_1 = require("../TextContent");
class DisplayTemplateList1Item {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DisplayTemplateList1Item.prototype, "token", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], DisplayTemplateList1Item.prototype, "image", void 0);
__decorate([
    (0, MainTextMaxLength_1.MainTextMaxLength)(constants_1.DISPLAY_TEMPLATE_ITEM_MAIN_TEXT_MAX_LENGTH),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => TextContent_1.TextContent),
    __metadata("design:type", TextContent_1.TextContent)
], DisplayTemplateList1Item.prototype, "textContent", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], DisplayTemplateList1Item.prototype, "backgroundImage", void 0);
exports.DisplayTemplateList1Item = DisplayTemplateList1Item;
//# sourceMappingURL=DisplayTemplateList1Item.js.map