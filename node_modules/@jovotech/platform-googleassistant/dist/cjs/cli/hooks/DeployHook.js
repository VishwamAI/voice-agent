"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployHook = void 0;
const cli_core_1 = require("@jovotech/cli-core");
const fs_1 = require("fs");
const indent_string_1 = __importDefault(require("indent-string"));
const utilities_1 = require("../utilities");
class DeployHook extends cli_core_1.PluginHook {
    install() {
        this.middlewareCollection = {
            'before.deploy:platform': [
                this.checkForPlatform.bind(this),
                utilities_1.checkForGactionsCli,
                this.checkForPlatformsFolder.bind(this),
            ],
            'deploy:platform': [this.deploy.bind(this)],
        };
    }
    /**
     * Checks if the currently selected platform matches this CLI plugin.
     */
    checkForPlatform() {
        // Check if this plugin should be used or not.
        if (!this.$context.platforms.includes(this.$plugin.id)) {
            this.uninstall();
        }
    }
    /**
     * Checks if the platform folder for the current plugin exists.
     */
    checkForPlatformsFolder() {
        if (!(0, fs_1.existsSync)(this.$plugin.platformPath)) {
            throw new cli_core_1.JovoCliError({
                message: `Couldn't find the platform folder ${this.$plugin.platformPath}.`,
                module: this.$plugin.name,
                hint: `Please use "jovo build" to create platform-specific files.`,
            });
        }
    }
    /**
     * Deploys platform-specific files, such as intents and entities to the Google Actions Console.
     */
    async deploy() {
        const deployTask = new cli_core_1.Task(`${cli_core_1.ROCKET} Deploying Conversational Action ${(0, cli_core_1.printStage)(this.$cli.project.stage)}`);
        const pushProjectFilesTask = new cli_core_1.Task('Pushing project files', async () => {
            try {
                const { stdout, stderr } = await (0, cli_core_1.execAsync)(`gactions push --consumer jovo-cli`, {
                    cwd: this.$plugin.platformPath,
                });
                if (stderr) {
                    // Check for validation errors.
                    const validationErrorString = '[WARNING] Server found validation issues';
                    if (stderr.includes(validationErrorString) && stdout) {
                        // Try to parse table of validation errors.
                        const start = stdout.indexOf('Locale');
                        const end = stdout.indexOf('Done') - 3;
                        const validationErrors = stdout
                            .substring(start, end)
                            .split('\n')
                            .map((el) => (0, indent_string_1.default)(el.trimEnd(), 2));
                        const output = [
                            cli_core_1.Log.warning('Validation errors occured', { dry: true, newLine: false }) || '',
                        ];
                        for (const validationError of validationErrors) {
                            output.push(cli_core_1.Log.info(validationError, { logLevel: cli_core_1.LogLevel.Warn, dry: true, newLine: false }) ||
                                '');
                        }
                        return output;
                    }
                }
            }
            catch (error) {
                throw (0, utilities_1.getGactionsError)(error.stderr);
            }
        });
        deployTask.add(pushProjectFilesTask);
        await deployTask.run();
    }
}
exports.DeployHook = DeployHook;
//# sourceMappingURL=DeployHook.js.map