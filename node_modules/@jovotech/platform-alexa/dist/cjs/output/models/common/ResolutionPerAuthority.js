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
exports.ResolutionPerAuthority = void 0;
const output_1 = require("@jovotech/output");
const ResolutionPerAuthorityStatus_1 = require("./ResolutionPerAuthorityStatus");
const ResolutionPerAuthorityValue_1 = require("./ResolutionPerAuthorityValue");
class ResolutionPerAuthority {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResolutionPerAuthority.prototype, "authority", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => ResolutionPerAuthorityStatus_1.ResolutionPerAuthorityStatus),
    __metadata("design:type", ResolutionPerAuthorityStatus_1.ResolutionPerAuthorityStatus)
], ResolutionPerAuthority.prototype, "status", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => ResolutionPerAuthorityValue_1.ResolutionPerAuthorityValue),
    __metadata("design:type", Array)
], ResolutionPerAuthority.prototype, "values", void 0);
exports.ResolutionPerAuthority = ResolutionPerAuthority;
//# sourceMappingURL=ResolutionPerAuthority.js.map