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
exports.HtmlStartDirective = void 0;
const output_1 = require("@jovotech/output");
const Directive_1 = require("../Directive");
const HtmlConfiguration_1 = require("./HtmlConfiguration");
const HtmlRequest_1 = require("./HtmlRequest");
const HtmlTransformers_1 = require("./HtmlTransformers");
class HtmlStartDirective extends Directive_1.Directive {
}
__decorate([
    (0, output_1.Equals)('Alexa.Presentation.HTML.Start'),
    __metadata("design:type", String)
], HtmlStartDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], HtmlStartDirective.prototype, "data", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => HtmlRequest_1.HtmlRequest),
    __metadata("design:type", HtmlRequest_1.HtmlRequest)
], HtmlStartDirective.prototype, "request", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => HtmlConfiguration_1.HtmlConfiguration),
    __metadata("design:type", HtmlConfiguration_1.HtmlConfiguration)
], HtmlStartDirective.prototype, "configuration", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => HtmlTransformers_1.HtmlTransformers),
    __metadata("design:type", HtmlTransformers_1.HtmlTransformers)
], HtmlStartDirective.prototype, "transformer", void 0);
exports.HtmlStartDirective = HtmlStartDirective;
//# sourceMappingURL=HtmlStartDirective.js.map