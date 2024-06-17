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
exports.AplSendIndexListDataDirective = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
const AplIndexListDirective_1 = require("./AplIndexListDirective");
class AplSendIndexListDataDirective extends AplIndexListDirective_1.AplIndexListDirective {
}
__decorate([
    (0, output_1.Equals)('Alexa.Presentation.APL.SendIndexListData'),
    __metadata("design:type", String)
], AplSendIndexListDataDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplSendIndexListDataDirective.prototype, "correlationToken", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsInt)(),
    (0, output_1.Min)(constants_1.APL_LIST_VERSION_MIN),
    __metadata("design:type", Number)
], AplSendIndexListDataDirective.prototype, "listVersion", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplSendIndexListDataDirective.prototype, "minimumInclusiveIndex", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AplSendIndexListDataDirective.prototype, "maximumExclusiveIndex", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], AplSendIndexListDataDirective.prototype, "items", void 0);
exports.AplSendIndexListDataDirective = AplSendIndexListDataDirective;
//# sourceMappingURL=AplSendIndexListDataDirective.js.map