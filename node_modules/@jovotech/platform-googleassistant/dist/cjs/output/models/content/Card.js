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
const output_1 = require("@jovotech/output");
const Image_1 = require("../common/Image");
const Link_1 = require("../common/Link");
class Card {
    toCard() {
        var _a;
        const card = {
            title: (this.title || this.text || this.subtitle),
        };
        if (this.subtitle) {
            card.subtitle = this.subtitle;
        }
        if (this.text) {
            card.content = this.text;
        }
        if ((_a = this.image) === null || _a === void 0 ? void 0 : _a.url) {
            card.imageUrl = this.image.url;
        }
        return card;
    }
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Card.prototype, "subtitle", void 0);
__decorate([
    (0, output_1.IsSomeValid)({
        keys: ['text', 'image'],
        validate: (value) => {
            if (!(0, output_1.isString)(value)) {
                return '$property must be a string';
            }
            if (!value) {
                return '$property should not be empty';
            }
            return;
        },
    }),
    __metadata("design:type", String)
], Card.prototype, "text", void 0);
__decorate([
    (0, output_1.IsSomeValid)({
        keys: ['text', 'image'],
        validate: async (value) => {
            if (!(value instanceof Image_1.Image)) {
                return `$property has to be an instance of Image`;
            }
            const errors = await (0, output_1.validate)(value);
            if (errors.length) {
                return (0, output_1.formatValidationErrors)(errors, {
                    text: '$property is invalid:',
                    delimiter: '\n  - ',
                    path: '$property',
                });
            }
            return;
        },
    }),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Card.prototype, "image", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(Image_1.ImageFill),
    __metadata("design:type", String)
], Card.prototype, "imageFill", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Link_1.Link),
    __metadata("design:type", Link_1.Link)
], Card.prototype, "button", void 0);
exports.Card = Card;
//# sourceMappingURL=Card.js.map