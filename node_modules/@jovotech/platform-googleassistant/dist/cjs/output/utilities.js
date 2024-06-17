"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentModelPrototypes = exports.convertMessageToGoogleAssistantSimple = void 0;
const common_1 = require("@jovotech/common");
const output_1 = require("@jovotech/output");
const models_1 = require("./models");
function convertMessageToGoogleAssistantSimple(message) {
    if (typeof message === 'string') {
        return {
            speech: common_1.SsmlUtilities.toSSML(message),
            text: common_1.SsmlUtilities.removeSSML(message),
        };
    }
    return {
        speech: common_1.SsmlUtilities.toSSML(message.speech || message.text),
        text: common_1.SsmlUtilities.removeSSML(message.text || message.speech),
    };
}
exports.convertMessageToGoogleAssistantSimple = convertMessageToGoogleAssistantSimple;
function augmentModelPrototypes() {
    output_1.Card.prototype.toGoogleAssistantCard = function () {
        const card = {
            title: this.title,
        };
        if (this.subtitle) {
            card.subtitle = this.subtitle;
        }
        if (this.content) {
            card.text = this.content;
        }
        if (this.imageUrl) {
            card.image = {
                url: this.imageUrl,
                alt: this.title,
            };
        }
        return card;
    };
    output_1.Carousel.prototype.toGoogleAssistantCard = function () {
        const { title, subtitle, content, imageUrl } = this.items[0];
        const card = {
            title: this.title || title,
            subtitle,
            text: content,
            image: imageUrl
                ? {
                    url: imageUrl,
                    alt: title,
                }
                : undefined,
        };
        return card;
    };
    output_1.Carousel.prototype.toGoogleAssistantCollectionData = function () {
        var _a;
        const typeOverride = {
            name: ((_a = this.selection) === null || _a === void 0 ? void 0 : _a.entityType) || '',
            typeOverrideMode: models_1.TypeOverrideMode.Replace,
            synonym: {
                entries: this.items.map((item, index) => {
                    return {
                        name: item.key || `ITEM_${index + 1}`,
                        synonyms: [],
                        display: {
                            title: item.title,
                            description: item.subtitle || item.content,
                            image: item.imageUrl ? { alt: item.title, url: item.imageUrl } : undefined,
                        },
                    };
                }),
            },
        };
        const collection = {
            items: this.items.map((item, index) => {
                return {
                    key: item.key || `ITEM_${index + 1}`,
                };
            }),
        };
        return { collection, typeOverride };
    };
    output_1.Message.prototype.toGoogleAssistantSimple = function () {
        return convertMessageToGoogleAssistantSimple(this);
    };
    output_1.QuickReply.prototype.toGoogleAssistantSuggestion = function () {
        return {
            title: this.text,
        };
    };
}
exports.augmentModelPrototypes = augmentModelPrototypes;
//# sourceMappingURL=utilities.js.map