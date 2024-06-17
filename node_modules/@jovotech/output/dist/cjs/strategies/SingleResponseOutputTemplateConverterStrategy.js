"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleResponseOutputTemplateConverterStrategy = void 0;
const common_1 = require("@jovotech/common");
const __1 = require("..");
const OutputTemplateConverterStrategy_1 = require("../OutputTemplateConverterStrategy");
/**
 * Strategy that merges multiple OutputTemplates into a single NormalizedOutputTemplate and only converts the merged NormalizedOutputTemplate to a response.
 * - Strings get concatenated and separated by a whitespace.
 * - Quick Replies get merged into a single array.
 * - Card/Carousel the last in the array is used.
 * - NativeResponses get merged.
 * - Listen gets merged.
 */
class SingleResponseOutputTemplateConverterStrategy extends OutputTemplateConverterStrategy_1.OutputTemplateConverterStrategy {
    normalizeOutput(output) {
        let normalizedOutput = super.normalizeOutput(output);
        if (Array.isArray(normalizedOutput)) {
            normalizedOutput = this.mergeOutputTemplates(normalizedOutput);
        }
        return this.shouldSanitize() ? this.sanitizeOutput(normalizedOutput) : normalizedOutput;
    }
    normalizeResponse(rawResponse) {
        return super.normalizeResponse(rawResponse);
    }
    mergeOutputTemplates(output) {
        return (0, __1.plainToClass)(__1.NormalizedOutputTemplate, output.reduce((accumulator, current) => this.mergeOutputTemplateWith(accumulator, current), {}));
    }
    mergeOutputTemplateWith(target, mergeWith) {
        var _a;
        this.mergeOutputTemplateBaseWith(target, mergeWith);
        const platformOutput = (_a = mergeWith.platforms) === null || _a === void 0 ? void 0 : _a[this.platformName];
        if (platformOutput) {
            if (!target.platforms) {
                target.platforms = {};
            }
            if (!target.platforms[this.platformName]) {
                target.platforms[this.platformName] = {};
            }
            const targetPlatformOutput = target.platforms[this.platformName];
            if (platformOutput.nativeResponse) {
                if (!targetPlatformOutput.nativeResponse) {
                    targetPlatformOutput.nativeResponse = {};
                }
                (0, __1.mergeInstances)(targetPlatformOutput.nativeResponse, platformOutput.nativeResponse);
            }
            this.mergeOutputTemplateBaseWith(targetPlatformOutput, platformOutput);
        }
        return target;
    }
    mergeOutputTemplateBaseWith(target, mergeWith) {
        const message = mergeWith.message;
        if (message) {
            target.message = this.mergeMessages(target.message, message);
        }
        const reprompt = mergeWith.reprompt;
        if (reprompt) {
            target.reprompt = this.mergeMessages(target.reprompt, reprompt);
        }
        const quickReplies = mergeWith.quickReplies;
        if (quickReplies) {
            if (!target.quickReplies) {
                target.quickReplies = [];
            }
            target.quickReplies.push(...quickReplies);
        }
        const card = mergeWith.card;
        if (card) {
            target.card = Object.assign({}, card);
        }
        const carousel = mergeWith.carousel;
        if (carousel) {
            target.carousel = Object.assign({}, carousel);
        }
        target.listen = (0, __1.mergeListen)(target.listen, mergeWith.listen);
    }
    mergeMessages(target, mergeWith) {
        if (!target) {
            return mergeWith;
        }
        if (typeof target === 'string' && typeof mergeWith === 'string') {
            return this.mergeSpeech(target, mergeWith);
        }
        const targetSpeech = typeof target === 'string' ? target : target.speech;
        const mergeWithSpeech = typeof mergeWith === 'string' ? mergeWith : mergeWith.speech;
        const mergedSpeech = this.mergeSpeech(targetSpeech, mergeWithSpeech);
        const targetText = typeof target === 'string' ? target : target.text;
        const mergeWithText = typeof mergeWith === 'string' ? mergeWith : mergeWith.text;
        const mergedText = this.mergeText(targetText, mergeWithText);
        const message = {};
        if (mergedSpeech) {
            message.speech = mergedSpeech;
        }
        if (mergedText) {
            message.text = mergedText;
        }
        return message;
    }
    mergeSpeech(target, mergeWith) {
        if (!target && !mergeWith) {
            return;
        }
        if (!target && mergeWith) {
            return common_1.SsmlUtilities.toSSML(mergeWith);
        }
        if (!mergeWith && target) {
            return common_1.SsmlUtilities.toSSML(target);
        }
        const mergedText = [target, mergeWith].reduce((result, text) => {
            if (text) {
                result += `${(result === null || result === void 0 ? void 0 : result.length) ? ' ' : ''}${common_1.SsmlUtilities.removeSSMLSpeakTags(text)}`;
            }
            return result;
        });
        return common_1.SsmlUtilities.isSSML(target) || common_1.SsmlUtilities.isSSML(mergeWith)
            ? common_1.SsmlUtilities.toSSML(mergedText)
            : mergedText;
    }
    mergeText(target, mergeWith) {
        if (!target && !mergeWith) {
            return;
        }
        if (!target && mergeWith) {
            return common_1.SsmlUtilities.removeSSML(mergeWith);
        }
        if (!mergeWith && target) {
            return common_1.SsmlUtilities.removeSSML(target);
        }
        return [target, mergeWith].reduce((result, text) => {
            if (text) {
                if (!result) {
                    result = '';
                }
                result += `${(result === null || result === void 0 ? void 0 : result.length) ? ' ' : ''}${common_1.SsmlUtilities.removeSSML(text)}`;
            }
            return result;
        }, undefined);
    }
}
exports.SingleResponseOutputTemplateConverterStrategy = SingleResponseOutputTemplateConverterStrategy;
//# sourceMappingURL=SingleResponseOutputTemplateConverterStrategy.js.map