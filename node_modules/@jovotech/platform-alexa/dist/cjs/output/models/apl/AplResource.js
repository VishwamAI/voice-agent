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
exports.AplResource = void 0;
const output_1 = require("@jovotech/output");
const AplGradient_1 = require("./AplGradient");
class AplResource {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsOfEitherType)(['string', 'boolean']),
    __metadata("design:type", Object)
], AplResource.prototype, "when", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsBoolean)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "boolean", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsBoolean)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "booleans", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "color", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "colors", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplResource.prototype, "description", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "dimension", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "dimensions", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "easing", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "easings", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.TransformMap)(() => AplGradient_1.AplGradient),
    __metadata("design:type", Object)
], AplResource.prototype, "gradient", void 0);
__decorate([
    (0, output_1.TransformMap)(() => AplGradient_1.AplGradient),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.IsOptional)(),
    __metadata("design:type", Object)
], AplResource.prototype, "gradients", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsOfEitherType)(['string', 'number'], { each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "number", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsOfEitherType)(['string', 'number'], { each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "numbers", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "string", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Object)
], AplResource.prototype, "strings", void 0);
exports.AplResource = AplResource;
//# sourceMappingURL=AplResource.js.map