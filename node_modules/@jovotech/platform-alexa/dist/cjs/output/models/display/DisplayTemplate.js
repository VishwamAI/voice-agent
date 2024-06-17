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
exports.DisplayTemplate = exports.BackButtonVisibility = exports.DisplayTemplateType = void 0;
const output_1 = require("@jovotech/output");
var DisplayTemplateType;
(function (DisplayTemplateType) {
    DisplayTemplateType["Body1"] = "BodyTemplate1";
    DisplayTemplateType["Body2"] = "BodyTemplate2";
    DisplayTemplateType["Body3"] = "BodyTemplate3";
    DisplayTemplateType["Body6"] = "BodyTemplate6";
    DisplayTemplateType["Body7"] = "BodyTemplate7";
    DisplayTemplateType["List1"] = "ListTemplate1";
    DisplayTemplateType["List2"] = "ListTemplate2";
})(DisplayTemplateType = exports.DisplayTemplateType || (exports.DisplayTemplateType = {}));
var BackButtonVisibility;
(function (BackButtonVisibility) {
    BackButtonVisibility["Hidden"] = "HIDDEN";
    BackButtonVisibility["Visible"] = "VISIBLE";
})(BackButtonVisibility = exports.BackButtonVisibility || (exports.BackButtonVisibility = {}));
class DisplayTemplate {
}
__decorate([
    (0, output_1.IsEnum)(DisplayTemplateType),
    __metadata("design:type", String)
], DisplayTemplate.prototype, "type", void 0);
exports.DisplayTemplate = DisplayTemplate;
//# sourceMappingURL=DisplayTemplate.js.map