"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOutput = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const JovoProxy_1 = require("./JovoProxy");
class BaseOutput extends JovoProxy_1.JovoProxy {
    constructor(jovo, options) {
        super(jovo);
        const defaultOptions = this.getDefaultOptions();
        this.options = options ? (0, lodash_merge_1.default)(defaultOptions, options) : defaultOptions;
    }
    getDefaultOptions() {
        return {};
    }
}
exports.BaseOutput = BaseOutput;
//# sourceMappingURL=BaseOutput.js.map