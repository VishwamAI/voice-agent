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
exports.AplGradient = exports.AplGradientType = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
var AplGradientType;
(function (AplGradientType) {
    AplGradientType["Linear"] = "linear";
    AplGradientType["Radial"] = "radial";
})(AplGradientType = exports.AplGradientType || (exports.AplGradientType = {}));
class AplGradient {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(AplGradientType),
    __metadata("design:type", String)
], AplGradient.prototype, "type", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsInt)(),
    __metadata("design:type", Number)
], AplGradient.prototype, "angle", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ArrayMinSize)(constants_1.APL_GRADIENT_COLOR_RANGE_MIN_SIZE),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], AplGradient.prototype, "colorRange", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplGradient.prototype, "description", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsNumber)({}, { each: true }),
    (0, output_1.Min)(constants_1.APL_GRADIENT_INPUT_RANGE_MIN, {
        each: true,
    }),
    (0, output_1.Max)(constants_1.APL_GRADIENT_INPUT_RANGE_MAX, {
        each: true,
    }),
    __metadata("design:type", Array)
], AplGradient.prototype, "inputRange", void 0);
exports.AplGradient = AplGradient;
//# sourceMappingURL=AplGradient.js.map