"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const lodash_mergewith_1 = __importDefault(require("lodash.mergewith"));
const loglevel_1 = require("loglevel");
const JovoError_1 = require("./JovoError");
class JovoLogger {
    constructor(nameOrConfig) {
        const defaultConfig = this.getDefaultConfig();
        // if a config is passed, merge the default config with either the passed config or name
        // otherwise just use the default config
        this.config = nameOrConfig
            ? (0, lodash_mergewith_1.default)(defaultConfig, typeof nameOrConfig === 'string' ? { name: nameOrConfig } : nameOrConfig, (value, srcValue) => {
                if (Array.isArray(value) && Array.isArray(srcValue)) {
                    return srcValue;
                }
            })
            : defaultConfig;
        // create the logger instance with the given name
        // if the name is used again, the same instance will be returned
        this.logger = (0, loglevel_1.getLogger)(this.config.name);
        // set the level of the logger depending on the config
        this.logger.setLevel(this.config.level);
    }
    get level() {
        return this.logger.getLevel();
    }
    set level(level) {
        this.logger.setLevel(level);
    }
    getDefaultConfig() {
        return {
            name: 'JovoLogger',
            styling: true,
            level: process.env.JOVO_LOG_LEVEL || loglevel_1.levels.TRACE,
            errorProperties: ['package', 'message', 'context', 'stack', 'hint', 'learnMore'],
        };
    }
    trace(...args) {
        this.applyStyleIfEnabled(args, chalk_1.default.magenta);
        this.logger.trace(...args);
    }
    log(...args) {
        this.applyStyleIfEnabled(args, chalk_1.default.white);
        this.logger.log(...args);
    }
    debug(...args) {
        this.applyStyleIfEnabled(args, chalk_1.default.green);
        this.logger.debug(...args);
    }
    info(...args) {
        this.applyStyleIfEnabled(args, chalk_1.default.blue);
        this.logger.info(...args);
    }
    warn(...args) {
        this.applyStyleIfEnabled(args, chalk_1.default.yellow);
        this.logger.warn(...args);
    }
    error(...args) {
        const logPart = (part) => {
            if (part.length) {
                this.applyStyleIfEnabled(part, chalk_1.default.red);
                this.logger.error(...part);
            }
        };
        // just looping args and using this.logger.error there would lead to more line breaks than expected,
        // therefore the logic beneath only adds line breaks when a JovoError was found as arg
        let currentPart = [];
        args.forEach((value) => {
            // if the value is a JovoError make sure to log the current part and reset it
            if (value instanceof JovoError_1.JovoError) {
                logPart(currentPart);
                currentPart = [];
                // and also log the JovoError
                this.jovoError(value);
            }
            else {
                // otherwise just add to the current part
                currentPart.push(value);
            }
        });
        // if there's anything left in the current part, log it as well
        logPart(currentPart);
    }
    jovoError(error) {
        this.logger.error(this.style('\nJOVO ERROR', chalk_1.default.redBright), this.style(` ${error.name} `, chalk_1.default.bgRedBright));
        // add empty line after error header
        this.logger.error();
        // function for logging a property of JovoError if it exists and is a string
        // an additional chalk method can be passed for customizing the value's text
        const logStringProperty = (property, style = chalk_1.default.whiteBright) => {
            const value = error[property];
            if (!value || typeof value !== 'string') {
                return;
            }
            // format property: uppercase letters to lower case and add space before
            // example: learnMore -> learn more; helloWorld -> hello world
            const formattedProperty = property.replace(/([A-Z])/g, (text) => ' ' + text.toLowerCase());
            this.logger.error(this.style(`${formattedProperty}:`, chalk_1.default.underline));
            this.logger.error(this.style(value, style));
        };
        // function for logging the context of JovoError
        const logContext = () => {
            this.logger.error(this.style('context:', chalk_1.default.underline));
            this.logger.error(error.context);
        };
        // function for logging a property of JovoError
        const logProperty = (property, style) => {
            if (property === 'context') {
                logContext();
            }
            else {
                logStringProperty(property, style);
            }
            // add empty line after property block
            this.logger.error();
        };
        // log each configured property
        this.config.errorProperties.forEach((property) => {
            logProperty(property);
        });
    }
    // utility method that only applies the given chalk-function if styling is not disabled
    style(text, chalkFn) {
        if (!this.config.styling) {
            return text;
        }
        return chalkFn(text);
    }
    // applies the given style to all strings in the given args if styling is not disabled
    applyStyleIfEnabled(args, chalkFn) {
        if (!this.config.styling) {
            return;
        }
        args.forEach((arg, index) => {
            // only style strings for now
            if (typeof arg === 'string') {
                args[index] = chalkFn(arg);
            }
        });
    }
}
exports.JovoLogger = JovoLogger;
//# sourceMappingURL=JovoLogger.js.map