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
exports.ApltDocument = void 0;
const output_1 = require("@jovotech/output");
const AplLayout_1 = require("../apl/AplLayout");
const AplResource_1 = require("../apl/AplResource");
const ApltDocumentSettings_1 = require("./ApltDocumentSettings");
class ApltDocument {
}
__decorate([
    (0, output_1.Equals)('APLT'),
    __metadata("design:type", String)
], ApltDocument.prototype, "type", void 0);
__decorate([
    (0, output_1.Equals)('1.0'),
    __metadata("design:type", String)
], ApltDocument.prototype, "version", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApltDocument.prototype, "description", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.TransformMap)(() => AplLayout_1.AplLayout),
    __metadata("design:type", Object)
], ApltDocument.prototype, "layouts", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => AplResource_1.AplResource),
    __metadata("design:type", Array)
], ApltDocument.prototype, "resources", void 0);
__decorate([
    (0, output_1.IsObject)(),
    (0, output_1.IsOfEitherType)(['array', 'object'], { each: true }),
    __metadata("design:type", Object)
], ApltDocument.prototype, "mainTemplate", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], ApltDocument.prototype, "onMount", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => ApltDocumentSettings_1.ApltDocumentSettings),
    __metadata("design:type", ApltDocumentSettings_1.ApltDocumentSettings)
], ApltDocument.prototype, "settings", void 0);
exports.ApltDocument = ApltDocument;
//# sourceMappingURL=ApltDocument.js.map