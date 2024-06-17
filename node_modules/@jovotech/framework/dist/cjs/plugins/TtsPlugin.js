"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtsPlugin = exports.TtsTextType = void 0;
const common_1 = require("@jovotech/common");
const __1 = require("..");
const Platform_1 = require("../Platform");
const Plugin_1 = require("../Plugin");
const ts_md5_1 = require("ts-md5");
var TtsTextType;
(function (TtsTextType) {
    TtsTextType["Text"] = "text";
    TtsTextType["Ssml"] = "ssml";
})(TtsTextType = exports.TtsTextType || (exports.TtsTextType = {}));
// Provide basic functionality that will then be used by all TTS plugins
class TtsPlugin extends Plugin_1.Plugin {
    mount(parent) {
        if (!(parent instanceof Platform_1.Platform)) {
            throw new __1.InvalidParentError(this.name, 'Platform');
        }
        parent.middlewareCollection.use('response.tts', (jovo) => {
            return this.tts(jovo);
        });
    }
    async tts(jovo) {
        const response = jovo.$response;
        // if this plugin is not able to process tts, skip
        if (!this.processTts || !response) {
            return;
        }
        if (response.getSpeech) {
            const speech = response.getSpeech() || [];
            const speechList = Array.isArray(speech) ? speech : [speech];
            const replaceList = await this.processTextList(jovo, speechList);
            if (replaceList && response.replaceSpeech) {
                response.replaceSpeech(replaceList);
            }
        }
        if (response.getReprompt) {
            const reprompt = response.getReprompt() || [];
            const repromptList = Array.isArray(reprompt) ? reprompt : [reprompt];
            const replaceList = await this.processTextList(jovo, repromptList);
            if (replaceList && response.replaceReprompt) {
                response.replaceReprompt(replaceList);
            }
        }
    }
    async processTextList(jovo, textList) {
        const replaceList = [];
        for (const item of textList) {
            const result = await this.processTextItem(jovo, item);
            const audioTag = this.buildAudioTag(result);
            if (audioTag) {
                replaceList.push(audioTag);
            }
        }
        if (replaceList.length === 0) {
            return;
        }
        return replaceList;
    }
    async processTextItem(jovo, text) {
        if (!text) {
            return;
        }
        const textType = common_1.SsmlUtilities.isPlainText(text) ? TtsTextType.Text : TtsTextType.Ssml;
        let prefix;
        if (this.getKeyPrefix) {
            prefix = this.getKeyPrefix(jovo);
        }
        const audioKey = this.buildKey(text, prefix);
        const locale = this.getLocale(jovo);
        let ttsResponse;
        if (this.config.cache) {
            ttsResponse = await this.config.cache.getItem(audioKey, locale, this.config.outputFormat);
            if (ttsResponse) {
                if (!ttsResponse.text) {
                    ttsResponse.text = text;
                }
            }
        }
        if (!ttsResponse) {
            ttsResponse = await this.processTts(jovo, text, textType);
            if (ttsResponse) {
                ttsResponse.key = audioKey;
                if (this.config.cache) {
                    const url = await this.config.cache.storeItem(audioKey, locale, ttsResponse);
                    if (url) {
                        ttsResponse.url = url;
                    }
                }
            }
        }
        return ttsResponse;
    }
    buildAudioTag(data) {
        if (data === null || data === void 0 ? void 0 : data.url) {
            return common_1.SsmlUtilities.buildAudioTag(data.url);
        }
        else if ((data === null || data === void 0 ? void 0 : data.encodedAudio) && (data === null || data === void 0 ? void 0 : data.contentType)) {
            return common_1.SsmlUtilities.buildAudioTag(__1.AudioUtilities.buildBase64Uri(data.encodedAudio, data.contentType));
        }
    }
    buildKey(text, prefix) {
        const hash = ts_md5_1.Md5.hashStr(text);
        return prefix ? `${prefix}-${hash}` : hash;
    }
    getLocale(jovo) {
        return jovo.$request.getLocale() || this.config.fallbackLocale;
    }
}
exports.TtsPlugin = TtsPlugin;
//# sourceMappingURL=TtsPlugin.js.map