"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaHook = void 0;
const cli_core_1 = require("@jovotech/cli-core");
const fs_1 = require("fs");
const lodash_get_1 = __importDefault(require("lodash.get"));
const lodash_set_1 = __importDefault(require("lodash.set"));
const DefaultFiles_json_1 = __importDefault(require("../DefaultFiles.json"));
class AlexaHook extends cli_core_1.PluginHook {
    updatePluginContext() {
        var _a;
        if (!this.$context.alexa) {
            this.$context.alexa = {};
        }
        this.$context.alexa.isACSkill = (_a = this.$plugin.config.conversations) === null || _a === void 0 ? void 0 : _a.enabled;
    }
    /**
     * Saves Alexa Skill ID to .ask/config.
     * @param skillId
     */
    setSkillId(skillId) {
        const askConfigFolderPath = this.$plugin.askConfigFolderPath;
        if (!(0, fs_1.existsSync)(askConfigFolderPath)) {
            (0, fs_1.mkdirSync)(askConfigFolderPath);
        }
        // Check if ask-states.json exists, if not, create it.
        if (!(0, fs_1.existsSync)(this.$plugin.askConfigPath)) {
            this.createEmptyAskConfig();
        }
        const askConfig = JSON.parse((0, fs_1.readFileSync)(this.$plugin.askConfigPath, 'utf-8'));
        const askProfile = this.$context.alexa.askProfile || 'default';
        (0, lodash_set_1.default)(askConfig, `profiles.${askProfile}.skillId`, skillId);
        (0, fs_1.writeFileSync)(this.$plugin.askConfigPath, JSON.stringify(askConfig, null, 2));
    }
    /**
     * Creates an empty ask config file.
     */
    createEmptyAskConfig() {
        const config = (0, lodash_get_1.default)(DefaultFiles_json_1.default, '[".ask/"]["ask-states.json"]');
        if (config) {
            (0, fs_1.writeFileSync)(this.$plugin.askConfigPath, JSON.stringify(config, null, 2));
        }
    }
    /**
     * Tries to get the ask profile from the "ask-resources.json" file
     */
    async getAskProfile() {
        const askResources = this.getAskResources();
        const profiles = Object.keys(askResources.profiles);
        if (!profiles.length) {
            return;
        }
        if (profiles.length === 1) {
            return profiles[0];
        }
        else {
            const { askProfile } = await (0, cli_core_1.prompt)({
                name: 'askProfile',
                type: 'select',
                message: `Found multiple ASK profiles in ask-resources.json. Which one do you want to use?`,
                choices: profiles.map((profile) => ({ title: (0, cli_core_1.printUserInput)(profile), value: profile })),
            }, {
                onCancel() {
                    process.exit();
                },
            });
            return askProfile;
        }
    }
    /**
     * Returns Alexa resources file
     */
    getAskResources() {
        try {
            return JSON.parse((0, fs_1.readFileSync)(this.$plugin.askResourcesPath, 'utf-8'));
        }
        catch (err) {
            throw new cli_core_1.JovoCliError({
                message: 'Could not read ask resources file.',
                module: this.$plugin.name,
            });
        }
    }
    /**
     * Returns Alexa Config
     */
    getAskConfig() {
        if ((0, fs_1.existsSync)(this.$plugin.askConfigPath)) {
            try {
                return JSON.parse((0, fs_1.readFileSync)(this.$plugin.askConfigPath, 'utf-8'));
            }
            catch (err) {
                throw new cli_core_1.JovoCliError({
                    message: 'Could not read ask configuration file.',
                    module: this.$plugin.name,
                });
            }
        }
    }
}
exports.AlexaHook = AlexaHook;
//# sourceMappingURL=AlexaHook.js.map