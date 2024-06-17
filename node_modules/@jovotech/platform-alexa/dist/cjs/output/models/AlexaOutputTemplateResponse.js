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
exports.AlexaOutputTemplateResponse = void 0;
const output_1 = require("@jovotech/output");
const Response_1 = require("./Response");
class AlexaOutputTemplateResponse {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AlexaOutputTemplateResponse.prototype, "version", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], AlexaOutputTemplateResponse.prototype, "sessionAttributes", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Response_1.Response),
    __metadata("design:type", Response_1.Response)
], AlexaOutputTemplateResponse.prototype, "response", void 0);
exports.AlexaOutputTemplateResponse = AlexaOutputTemplateResponse;
//# sourceMappingURL=AlexaOutputTemplateResponse.js.map