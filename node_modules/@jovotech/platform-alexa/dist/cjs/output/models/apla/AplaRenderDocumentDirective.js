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
exports.AplaRenderDocumentDirective = void 0;
const output_1 = require("@jovotech/output");
const AplDirective_1 = require("../apl/AplDirective");
const AplaDataSource_1 = require("./AplaDataSource");
class AplaRenderDocumentDirective extends AplDirective_1.AplDirective {
}
__decorate([
    (0, output_1.Equals)('Alexa.Presentation.APLA.RenderDocument'),
    __metadata("design:type", String)
], AplaRenderDocumentDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], AplaRenderDocumentDirective.prototype, "document", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.TransformMap)(() => AplaDataSource_1.AplaDataSource),
    __metadata("design:type", Object)
], AplaRenderDocumentDirective.prototype, "datasources", void 0);
exports.AplaRenderDocumentDirective = AplaRenderDocumentDirective;
//# sourceMappingURL=AplaRenderDocumentDirective.js.map