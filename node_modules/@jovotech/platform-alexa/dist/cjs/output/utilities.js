"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.augmentModelPrototypes = exports.convertMessageToOutputSpeech = exports.validateAlexaString = void 0;
const common_1 = require("@jovotech/common");
const output_1 = require("@jovotech/output");
const Card_json_1 = __importDefault(require("./apl/Card.json"));
const Carousel_json_1 = __importDefault(require("./apl/Carousel.json"));
const constants_1 = require("./constants");
const models_1 = require("./models");
function validateAlexaString(value) {
    if (typeof value !== 'string') {
        return '$property must be a string';
    }
    if (!value) {
        return '$property should not be empty';
    }
    if (value.length > constants_1.ALEXA_STRING_MAX_LENGTH) {
        return `$property can not exceed ${constants_1.ALEXA_STRING_MAX_LENGTH} characters`;
    }
    return;
}
exports.validateAlexaString = validateAlexaString;
function convertMessageToOutputSpeech(message) {
    if (typeof message === 'string') {
        return {
            type: models_1.OutputSpeechType.Ssml,
            ssml: common_1.SsmlUtilities.toSSML(message),
        };
    }
    if (message.speech) {
        return {
            type: models_1.OutputSpeechType.Ssml,
            ssml: common_1.SsmlUtilities.toSSML(message.speech),
        };
    }
    return {
        type: models_1.OutputSpeechType.Plain,
        text: common_1.SsmlUtilities.removeSSML(message.text),
    };
}
exports.convertMessageToOutputSpeech = convertMessageToOutputSpeech;
function augmentModelPrototypes() {
    output_1.Card.prototype.toAlexaCard = function () {
        const card = {
            type: models_1.CardType.Standard,
            title: this.title,
            text: this.content,
        };
        if (this.imageUrl) {
            card.image = {
                // TODO: determine whether large should always be set
                largeImageUrl: this.imageUrl,
            };
        }
        return card;
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    output_1.Card.prototype.toApl = function (cardTemplate) {
        const cardJson = cardTemplate || Card_json_1.default;
        cardJson.datasources.data.title = this.title;
        if (this.subtitle) {
            cardJson.datasources.data.subtitle = this.subtitle;
        }
        if (this.content) {
            cardJson.datasources.data.content = this.content;
        }
        if (this.imageUrl) {
            cardJson.datasources.data.imageUrl = this.imageUrl;
        }
        if (this.header) {
            cardJson.datasources.data.header = this.header;
        }
        if (this.backgroundImageUrl) {
            cardJson.datasources.data.backgroundImageUrl = this.backgroundImageUrl;
        }
        return Object.assign({ type: 'Alexa.Presentation.APL.RenderDocument', token: 'token' }, cardJson);
    };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    output_1.Carousel.prototype.toApl = function (carouselTemplate) {
        const carouselJson = carouselTemplate || Carousel_json_1.default;
        if (this.title) {
            carouselJson.datasources.data.title = this.title;
        }
        if (this.header) {
            carouselJson.datasources.data.header = this.header;
        }
        if (this.backgroundImageUrl) {
            carouselJson.datasources.data.backgroundImageUrl = this.backgroundImageUrl;
        }
        carouselJson.datasources.data.items = this.items.map((item) => (Object.assign(Object.assign({}, item), { selection: item.selection
                ? Object.assign({ type: 'Selection' }, item.selection) : undefined, 
            // map generic carousel properties to AlexaImageList.listItems properties
            // https://developer.amazon.com/en-US/docs/alexa/alexa-presentation-language/apl-alexa-image-list-layout.html#list-items
            primaryText: item.title, secondaryText: item.subtitle || item.content, imageSource: item.imageUrl })));
        return Object.assign({ type: 'Alexa.Presentation.APL.RenderDocument', token: 'token' }, carouselJson);
    };
    output_1.Message.prototype.toAlexaOutputSpeech = function () {
        return convertMessageToOutputSpeech(this);
    };
}
exports.augmentModelPrototypes = augmentModelPrototypes;
//# sourceMappingURL=utilities.js.map