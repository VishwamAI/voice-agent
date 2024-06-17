"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHook = void 0;
const cli_core_1 = require("@jovotech/cli-core");
const fs_1 = require("fs");
const lodash_get_1 = __importDefault(require("lodash.get"));
const utilities_1 = require("../utilities");
class GetHook extends cli_core_1.PluginHook {
    install() {
        this.middlewareCollection = {
            'install': [this.addCliOptions.bind(this)],
            'before.get:platform': [
                this.checkForPlatform.bind(this),
                utilities_1.checkForGactionsCli,
                this.updatePluginContext.bind(this),
                this.checkForExistingPlatformFiles.bind(this),
            ],
            'get:platform': [this.get.bind(this)],
        };
    }
    /**
     * Add platform-specific CLI options, including flags and args.
     * @param context - Context providing an access point to command flags and args.
     */
    addCliOptions(context) {
        if (context.command !== 'get:platform') {
            return;
        }
        context.flags['project-id'] = cli_core_1.flags.string({
            description: 'Google Cloud Project ID',
        });
    }
    /**
     * Checks if the currently selected platform matches this CLI plugin.
     * @param context - Context containing information after flags and args have been parsed by the CLI.
     */
    checkForPlatform() {
        // Check if this plugin should be used or not.
        if (!this.$context.platforms.includes(this.$plugin.id)) {
            this.uninstall();
        }
    }
    /**
     * Updates the current plugin context with platform-specific values.
     */
    updatePluginContext() {
        if (!this.$context.googleAssistant) {
            this.$context.googleAssistant = {};
        }
        this.$context.googleAssistant.projectId =
            this.$context.flags['project-id'] || (0, lodash_get_1.default)(this.$plugin.config, 'projectId');
        if (!this.$context.googleAssistant.projectId) {
            throw new cli_core_1.JovoCliError({
                message: 'Could not find projectId.',
                module: 'GoogleAssistantCli',
                hint: 'Please provide a project id by using the flag "--project-id" or in your project configuration.',
            });
        }
    }
    /**
     * Checks if platform-specific files already exist and prompts for overwriting them.
     */
    async checkForExistingPlatformFiles() {
        if (!this.$context.flags.clean && (0, fs_1.existsSync)(this.$plugin.platformPath)) {
            const answer = await (0, cli_core_1.promptOverwrite)('Found existing GoogleAssistant project files. How to proceed?');
            if (answer.overwrite === cli_core_1.ANSWER_CANCEL) {
                this.uninstall();
            }
        }
    }
    /**
     * Fetches platform-specific models, such as intents and entities from the Google Actions Console.
     */
    async get() {
        const getTask = new cli_core_1.Task(`Getting Conversational Actions Project ${(0, cli_core_1.printHighlight)(`(${this.$context.googleAssistant.projectId})`)}`, async () => {
            const platformPath = this.$plugin.platformPath;
            if (!(0, fs_1.existsSync)(platformPath)) {
                (0, fs_1.mkdirSync)(platformPath);
            }
            try {
                await (0, cli_core_1.execAsync)(`gactions pull --clean --force --project-id ${this.$context.googleAssistant.projectId} --consumer jovo-cli`, { cwd: platformPath });
            }
            catch (error) {
                throw (0, utilities_1.getGactionsError)(error.stderr);
            }
        });
        await getTask.run();
    }
}
exports.GetHook = GetHook;
//# sourceMappingURL=GetHook.js.map