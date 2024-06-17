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
exports.DisplayRenderTemplateDirective = void 0;
const output_1 = require("@jovotech/output");
const Directive_1 = require("../Directive");
const DisplayTemplate_1 = require("./DisplayTemplate");
const BodyTemplate1_1 = require("./templates/BodyTemplate1");
const BodyTemplate2_1 = require("./templates/BodyTemplate2");
const BodyTemplate3_1 = require("./templates/BodyTemplate3");
const BodyTemplate6_1 = require("./templates/BodyTemplate6");
const BodyTemplate7_1 = require("./templates/BodyTemplate7");
const ListTemplate1_1 = require("./templates/ListTemplate1");
const ListTemplate2_1 = require("./templates/ListTemplate2");
class DisplayRenderTemplateDirective extends Directive_1.Directive {
}
__decorate([
    (0, output_1.Equals)('Display.RenderTemplate'),
    __metadata("design:type", String)
], DisplayRenderTemplateDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => DisplayTemplate_1.DisplayTemplate, {
        keepDiscriminatorProperty: true,
        discriminator: {
            property: 'type',
            subTypes: [
                { value: BodyTemplate1_1.BodyTemplate1, name: DisplayTemplate_1.DisplayTemplateType.Body1 },
                { value: BodyTemplate2_1.BodyTemplate2, name: DisplayTemplate_1.DisplayTemplateType.Body2 },
                { value: BodyTemplate3_1.BodyTemplate3, name: DisplayTemplate_1.DisplayTemplateType.Body3 },
                { value: BodyTemplate6_1.BodyTemplate6, name: DisplayTemplate_1.DisplayTemplateType.Body6 },
                { value: BodyTemplate7_1.BodyTemplate7, name: DisplayTemplate_1.DisplayTemplateType.Body7 },
                { value: ListTemplate1_1.ListTemplate1, name: DisplayTemplate_1.DisplayTemplateType.List1 },
                { value: ListTemplate2_1.ListTemplate2, name: DisplayTemplate_1.DisplayTemplateType.List2 },
            ],
        },
    }),
    __metadata("design:type", DisplayTemplate_1.DisplayTemplate)
], DisplayRenderTemplateDirective.prototype, "template", void 0);
exports.DisplayRenderTemplateDirective = DisplayRenderTemplateDirective;
//# sourceMappingURL=DisplayRenderTemplateDirective.js.map