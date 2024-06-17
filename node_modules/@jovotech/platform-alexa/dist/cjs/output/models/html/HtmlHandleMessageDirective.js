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
exports.HtmlHandleMessageDirective = void 0;
const output_1 = require("@jovotech/output");
const Directive_1 = require("../Directive");
const HtmlTransformers_1 = require("./HtmlTransformers");
class HtmlHandleMessageDirective extends Directive_1.Directive {
}
__decorate([
    (0, output_1.Equals)('Alexa.Presentation.HTML.HandleMessage'),
    __metadata("design:type", String)
], HtmlHandleMessageDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], HtmlHandleMessageDirective.prototype, "message", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => HtmlTransformers_1.HtmlTransformers),
    __metadata("design:type", HtmlTransformers_1.HtmlTransformers)
], HtmlHandleMessageDirective.prototype, "transformer", void 0);
exports.HtmlHandleMessageDirective = HtmlHandleMessageDirective;
//# sourceMappingURL=HtmlHandleMessageDirective.js.map