"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAssistantCli = void 0;
const cli_core_1 = require("@jovotech/cli-core");
const path_1 = require("path");
const BuildHook_1 = require("./hooks/BuildHook");
const DeployHook_1 = require("./hooks/DeployHook");
const GetHook_1 = require("./hooks/GetHook");
const utilities_1 = require("./utilities");
class GoogleAssistantCli extends cli_core_1.JovoCliPlugin {
    constructor(config) {
        super(config);
    }
    get id() {
        return 'googleAssistant';
    }
    get type() {
        return 'platform';
    }
    get platformDirectory() {
        return `${this.type}.${this.id}`;
    }
    getHooks() {
        return [BuildHook_1.BuildHook, GetHook_1.GetHook, DeployHook_1.DeployHook];
    }
    getDefaultConfig() {
        return { projectId: '<YOUR-PROJECT-ID>', resourcesDirectory: (0, path_1.join)('resources', this.id) };
    }
    async getInitConfig() {
        const initConfig = { projectId: '<YOUR-PROJECT-ID>' };
        // Check for invalid locales and provide a default locale map.
        for (const locale of this.$context.locales) {
            if (!utilities_1.SupportedLocales.includes(locale)) {
                cli_core_1.Log.spacer();
                // Prompt user for alternative locale.
                const { locales } = await (0, cli_core_1.promptSupportedLocales)(locale, 'GoogleAssistant', utilities_1.SupportedLocales);
                if (!locales.length) {
                    continue;
                }
                if (!initConfig.locales) {
                    initConfig.locales = {};
                }
                initConfig.locales[locale] = locales;
            }
        }
        return initConfig;
    }
    get name() {
        return this.constructor.name;
    }
    /**
     * Returns base path to platform's build folder
     */
    get platformPath() {
        return (0, path_1.join)(this.$cli.project.getBuildPath(), this.platformDirectory);
    }
}
exports.GoogleAssistantCli = GoogleAssistantCli;
//# sourceMappingURL=index.js.map