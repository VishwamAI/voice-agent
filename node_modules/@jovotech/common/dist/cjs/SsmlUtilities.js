"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsmlUtilities = void 0;
class SsmlUtilities {
    static isPlainText(ssml) {
        return !/(?:(<[^>]*[/]>)|(<[^>]*>.*?<[/][^>]*>))/g.test(ssml);
    }
    static buildAudioTag(src) {
        return `<audio src="${src}"/>`;
    }
    static isSSML(text) {
        return /^<speak>.*<\/speak>$/.test(text);
    }
    static toSSML(text) {
        text = text.replace(/<[/]?speak>/g, '');
        return `<speak>${text}</speak>`;
    }
    static removeSSMLSpeakTags(ssml) {
        return ssml.replace(/<[/]?speak>/g, '');
    }
    static removeSSML(ssml) {
        return ssml.replace(/<[^>]*>/g, '');
    }
}
exports.SsmlUtilities = SsmlUtilities;
//# sourceMappingURL=SsmlUtilities.js.map