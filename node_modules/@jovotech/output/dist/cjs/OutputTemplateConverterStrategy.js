"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputTemplateConverterStrategy = void 0;
const common_1 = require("@jovotech/common");
const _1 = require(".");
const OutputHelpers_1 = require("./OutputHelpers");
const lodash_merge_1 = __importDefault(require("lodash.merge"));
class OutputTemplateConverterStrategy {
    constructor(config) {
        this.config = (0, lodash_merge_1.default)(this.getDefaultConfig(), config || {});
    }
    getDefaultConfig() {
        return {
            omitWarnings: false,
            sanitization: true,
            validation: true,
        };
    }
    // Normalize the output:
    // 1. get the platform specific output
    // 2. get the randomized output
    // 3. return instance(s) of NormalizedOutputTemplate
    normalizeOutput(output) {
        const normalize = (outputTemplate) => this.getRandomizedOutput(this.getPlatformSpecificOutput(outputTemplate));
        const normalizedOutput = Array.isArray(output) ? output.map(normalize) : normalize(output);
        return (0, _1.plainToClass)(_1.NormalizedOutputTemplate, normalizedOutput);
    }
    // Normalize the response:
    // - return instance of responseClass
    normalizeResponse(response) {
        return (0, _1.plainToClass)(this.responseClass, response);
    }
    getRandomizedOutput(output) {
        if (Array.isArray(output.message)) {
            output.message = OutputHelpers_1.OutputHelpers.randomize(output.message);
        }
        if (Array.isArray(output.reprompt)) {
            output.reprompt = OutputHelpers_1.OutputHelpers.randomize(output.reprompt);
        }
        return output;
    }
    getPlatformSpecificOutput(output) {
        return _1.NormalizedOutputTemplate.getKeys().reduce((outputCopy, outputKey) => {
            var _a, _b;
            if (outputKey === 'platforms') {
                // remove the platforms-output of all other platforms due to not being used anyways
                if ((_a = output.platforms) === null || _a === void 0 ? void 0 : _a[this.platformName]) {
                    outputCopy.platforms = {};
                    outputCopy.platforms[this.platformName] = (_b = output.platforms) === null || _b === void 0 ? void 0 : _b[this.platformName];
                }
                return outputCopy;
            }
            const newValue = this.getOutputValue(output, outputKey);
            if (typeof newValue !== 'undefined') {
                outputCopy[outputKey] = newValue;
            }
            return outputCopy;
        }, {});
    }
    getOutputValue(output, key) {
        var _a, _b;
        const platformValue = (_b = (_a = output.platforms) === null || _a === void 0 ? void 0 : _a[this.platformName]) === null || _b === void 0 ? void 0 : _b[key];
        if (platformValue === null) {
            return undefined;
        }
        return platformValue !== null && platformValue !== void 0 ? platformValue : output[key];
    }
    shouldSanitize(rule) {
        if (!rule) {
            return !!this.config.sanitization;
        }
        return typeof this.config.sanitization === 'object'
            ? this.config.sanitization[rule]
            : this.config.sanitization;
    }
    sanitizeMessage(message, path, maxLength, offset = 0) {
        var _a, _b;
        const speechMaxLength = (typeof maxLength === 'number' ? maxLength : maxLength.speech || Infinity) - offset;
        const textMaxLength = typeof maxLength === 'number' ? maxLength : maxLength.text || Infinity;
        const speechLength = typeof message === 'string' ? message.length : ((_a = message.speech) === null || _a === void 0 ? void 0 : _a.length) || 0;
        const textLength = typeof message === 'string' ? message.length : ((_b = message.text) === null || _b === void 0 ? void 0 : _b.length) || 0;
        const isSpeechExceeding = speechLength > speechMaxLength;
        const isTextExceeding = textLength > textMaxLength;
        const isExceeding = isSpeechExceeding || isTextExceeding;
        if (!this.shouldSanitize('trimStrings') || !isExceeding) {
            return message;
        }
        if (typeof message === 'object') {
            if (message.speech && isSpeechExceeding) {
                message.speech = message.speech.slice(0, speechMaxLength);
                this.logStringTrimWarning(`${path}.speech`, speechMaxLength);
            }
            if (message.text && isTextExceeding) {
                message.text = message.text.slice(0, textMaxLength);
                this.logStringTrimWarning(`${path}.text`, textMaxLength);
            }
        }
        else {
            const maxLength = common_1.SsmlUtilities.isSSML(message) ? speechMaxLength : textMaxLength;
            message = message.slice(0, maxLength);
            this.logStringTrimWarning(path, maxLength);
        }
        return message;
    }
    sanitizeDynamicEntities(dynamicEntities, path, maxEntries) {
        if (!this.shouldSanitize('trimMaps') ||
            !(dynamicEntities === null || dynamicEntities === void 0 ? void 0 : dynamicEntities.types) ||
            Object.keys(dynamicEntities.types).length <= maxEntries) {
            return dynamicEntities;
        }
        dynamicEntities.types = Object.keys(dynamicEntities)
            .slice(0, maxEntries)
            .reduce((map, entityKey) => {
            if (!dynamicEntities.types) {
                return map;
            }
            map[entityKey] = dynamicEntities.types[entityKey];
            return map;
        }, {});
        this.logMapTrimWarning(path, maxEntries);
        return dynamicEntities;
    }
    sanitizeQuickReplies(quickReplies, path, maxSize, maxLength) {
        if (!this.shouldSanitize('trimArrays') || quickReplies.length <= maxSize) {
            return quickReplies;
        }
        quickReplies = quickReplies.slice(0, maxSize);
        this.logArrayTrimWarning(path, maxSize);
        if (!this.shouldSanitize('trimStrings')) {
            return quickReplies;
        }
        return quickReplies.map((quickReply, index) => {
            const quickReplyTextLength = typeof quickReply === 'string' ? quickReply.length : quickReply.text.length;
            if (quickReplyTextLength <= maxLength) {
                return quickReply;
            }
            if (typeof quickReply === 'object') {
                quickReply.text = quickReply.text.slice(0, maxLength);
            }
            else {
                quickReply = quickReply.slice(0, maxLength);
            }
            this.logStringTrimWarning(`${path}[${index}]`, maxLength);
            return quickReply;
        });
    }
    sanitizeCarousel(carousel, path, minSize, maxSize) {
        if (!this.shouldSanitize('trimArrays') ||
            (carousel.items.length >= minSize && carousel.items.length <= maxSize)) {
            return carousel;
        }
        carousel.items = carousel.items.slice(0, maxSize);
        this.logArrayTrimWarning(path, maxSize);
        return carousel;
    }
    logSanitizationWarning(message) {
        if (this.config.omitWarnings) {
            return;
        }
        // eslint-disable-next-line no-console
        console.warn(message);
    }
    logStringTrimWarning(path, maxLength) {
        return this.logSanitizationWarning(this.getTrimMessage(path, maxLength, 'characters'));
    }
    logArrayTrimWarning(path, maxSize) {
        return this.logSanitizationWarning(this.getTrimMessage(path, maxSize, 'items'));
    }
    logMapTrimWarning(path, maxEntries) {
        return this.logSanitizationWarning(this.getTrimMessage(path, maxEntries, 'entries'));
    }
    getTrimMessage(path, max, suffix) {
        const pathStartsWithIndex = /^\[[\d+]].*/.test(path);
        const rootPath = `$output${pathStartsWithIndex ? '' : '.'}`;
        path = rootPath + path;
        return `${path} was trimmed due to exceeding the limit of ${max} ${suffix}.`;
    }
}
exports.OutputTemplateConverterStrategy = OutputTemplateConverterStrategy;
//# sourceMappingURL=OutputTemplateConverterStrategy.js.map