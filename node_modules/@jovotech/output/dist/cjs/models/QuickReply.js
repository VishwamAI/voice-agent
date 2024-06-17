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
exports.QuickReply = void 0;
const __1 = require("..");
const Entity_1 = require("./Entity");
class QuickReply {
}
__decorate([
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickReply.prototype, "text", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickReply.prototype, "value", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuickReply.prototype, "intent", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsObject)(),
    (0, __1.ValidateNested)({ each: true }),
    (0, __1.TransformMap)(() => Entity_1.Entity),
    __metadata("design:type", Object)
], QuickReply.prototype, "entities", void 0);
exports.QuickReply = QuickReply;
//# sourceMappingURL=QuickReply.js.map