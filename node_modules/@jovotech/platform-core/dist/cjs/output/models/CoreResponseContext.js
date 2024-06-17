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
exports.CoreResponseContext = exports.Request = void 0;
const output_1 = require("@jovotech/output");
const CoreResponseUser_1 = require("./CoreResponseUser");
const Session_1 = require("./Session");
class Request {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], Request.prototype, "id", void 0);
exports.Request = Request;
class CoreResponseContext {
}
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Request),
    __metadata("design:type", Request)
], CoreResponseContext.prototype, "request", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Session_1.Session),
    __metadata("design:type", Session_1.Session)
], CoreResponseContext.prototype, "session", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => CoreResponseUser_1.CoreResponseUser),
    __metadata("design:type", CoreResponseUser_1.CoreResponseUser)
], CoreResponseContext.prototype, "user", void 0);
exports.CoreResponseContext = CoreResponseContext;
//# sourceMappingURL=CoreResponseContext.js.map