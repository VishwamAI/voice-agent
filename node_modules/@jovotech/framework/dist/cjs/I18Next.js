"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18Next = void 0;
const i18next_1 = __importDefault(require("i18next"));
const Plugin_1 = require("./Plugin");
class I18Next extends Plugin_1.Plugin {
    constructor() {
        super(...arguments);
        this.i18n = i18next_1.default;
    }
    getDefaultConfig() {
        return {
            interpolation: {
                escapeValue: false,
                skipOnVariables: false, // Added for backwards compatibility, @see https://www.i18next.com/misc/migration-guide#skiponvariables-true
            },
            returnObjects: true,
            compatibilityJSON: 'v3', // Added for backwards compatibility, @see https://www.i18next.com/misc/migration-guide#json-format-v4-pluralization
        };
    }
    async initialize() {
        await this.i18n.init(this.config);
    }
    t(path, options) {
        if (options === null || options === void 0 ? void 0 : options.platform) {
            if (Array.isArray(path)) {
                for (const p of path) {
                    const platformPath = `${options.platform}:translation:${p}`;
                    if (this.i18n.exists(platformPath, options)) {
                        return this.i18n.t(platformPath, options);
                    }
                }
            }
            else {
                const platformPath = `${options.platform}:translation:${path}`;
                if (this.i18n.exists(platformPath, options)) {
                    return this.i18n.t(platformPath, options);
                }
            }
        }
        return this.i18n.t(path, options);
    }
}
exports.I18Next = I18Next;
//# sourceMappingURL=I18Next.js.map