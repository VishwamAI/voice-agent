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
exports.AplLayout = void 0;
const output_1 = require("@jovotech/output");
const AplParameter_1 = require("./AplParameter");
class AplLayout {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplLayout.prototype, "description", void 0);
__decorate([
    (0, output_1.IsEitherValid)({
        keys: ['item', 'items'],
    }),
    __metadata("design:type", Object)
], AplLayout.prototype, "item", void 0);
__decorate([
    (0, output_1.IsEitherValid)({
        keys: ['item', 'items'],
    }),
    __metadata("design:type", Array)
], AplLayout.prototype, "items", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsStringOrInstance)(AplParameter_1.AplParameter, { each: true }),
    (0, output_1.Type)(() => AplParameter_1.AplParameter),
    __metadata("design:type", Array)
], AplLayout.prototype, "parameters", void 0);
exports.AplLayout = AplLayout;
//# sourceMappingURL=AplLayout.js.map