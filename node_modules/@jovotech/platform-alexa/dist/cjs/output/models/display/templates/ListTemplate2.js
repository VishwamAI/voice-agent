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
exports.ListTemplate2 = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../../constants");
const Image_1 = require("../../common/Image");
const DisplayTemplate_1 = require("../DisplayTemplate");
const DisplayTemplateList2Item_1 = require("../list-items/DisplayTemplateList2Item");
class ListTemplate2 {
}
__decorate([
    (0, output_1.Equals)(DisplayTemplate_1.DisplayTemplateType.List2),
    __metadata("design:type", String)
], ListTemplate2.prototype, "type", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ListTemplate2.prototype, "token", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(DisplayTemplate_1.BackButtonVisibility),
    __metadata("design:type", String)
], ListTemplate2.prototype, "backButton", void 0);
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    (0, output_1.MaxLength)(constants_1.DISPLAY_TEMPLATE_TITLE_MAX_LENGTH),
    __metadata("design:type", String)
], ListTemplate2.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], ListTemplate2.prototype, "backgroundImage", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ArrayMinSize)(constants_1.LIST_TEMPLATE_MIN_SIZE),
    (0, output_1.ValidateNested)({
        each: true,
    }),
    (0, output_1.Type)(() => DisplayTemplateList2Item_1.DisplayTemplateList2Item),
    __metadata("design:type", Array)
], ListTemplate2.prototype, "listItems", void 0);
exports.ListTemplate2 = ListTemplate2;
//# sourceMappingURL=ListTemplate2.js.map