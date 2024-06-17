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
exports.Card = exports.CardType = void 0;
const output_1 = require("@jovotech/output");
const IsValidCardImage_1 = require("../../decorators/validation/IsValidCardImage");
const IsValidCardString_1 = require("../../decorators/validation/IsValidCardString");
const CardImage_1 = require("./CardImage");
var CardType;
(function (CardType) {
    CardType["Simple"] = "Simple";
    CardType["Standard"] = "Standard";
    CardType["LinkAccount"] = "LinkAccount";
    CardType["AskForPermissionsConsent"] = "AskForPermissionsConsent";
})(CardType = exports.CardType || (exports.CardType = {}));
class Card {
    toCard() {
        var _a, _b;
        const card = {
            title: (this.title || ''),
        };
        if (this.text || this.content) {
            card.content = this.text || this.content;
        }
        if (((_a = this.image) === null || _a === void 0 ? void 0 : _a.largeImageUrl) || ((_b = this.image) === null || _b === void 0 ? void 0 : _b.smallImageUrl)) {
            card.imageUrl = this.image.largeImageUrl || this.image.smallImageUrl;
        }
        return card;
    }
}
__decorate([
    (0, output_1.IsEnum)(CardType),
    __metadata("design:type", String)
], Card.prototype, "type", void 0);
__decorate([
    (0, IsValidCardString_1.IsValidCardString)([CardType.Simple, CardType.Standard, CardType.AskForPermissionsConsent]),
    __metadata("design:type", Object)
], Card.prototype, "title", void 0);
__decorate([
    (0, IsValidCardString_1.IsValidCardString)([CardType.Simple, CardType.AskForPermissionsConsent]),
    __metadata("design:type", Object)
], Card.prototype, "content", void 0);
__decorate([
    (0, IsValidCardString_1.IsValidCardString)([CardType.Standard, CardType.AskForPermissionsConsent]),
    __metadata("design:type", Object)
], Card.prototype, "text", void 0);
__decorate([
    (0, IsValidCardImage_1.IsValidCardImage)([CardType.Standard]),
    (0, output_1.Type)(() => CardImage_1.CardImage),
    __metadata("design:type", Object)
], Card.prototype, "image", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.IsString)({ each: true }),
    (0, output_1.IsNotEmpty)({ each: true }),
    __metadata("design:type", Array)
], Card.prototype, "permissions", void 0);
exports.Card = Card;
//# sourceMappingURL=Card.js.map