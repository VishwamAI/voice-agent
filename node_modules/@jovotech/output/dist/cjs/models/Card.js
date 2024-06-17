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
exports.Card = void 0;
const __1 = require("..");
class Card {
}
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "key", void 0);
__decorate([
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "title", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "subtitle", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "content", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsUrl)(),
    __metadata("design:type", String)
], Card.prototype, "imageUrl", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsString)(),
    (0, __1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "imageAlt", void 0);
exports.Card = Card;
//# sourceMappingURL=Card.js.map