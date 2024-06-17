"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoInputBuilder = void 0;
const JovoInput_1 = require("./JovoInput");
class JovoInputBuilder {
    constructor(inputTypeOrObject = JovoInput_1.DEFAULT_INPUT_TYPE) {
        this.input = new JovoInput_1.JovoInput(inputTypeOrObject);
    }
    set(key, value) {
        if (value) {
            this.input[key] = value;
        }
        return this;
    }
    build() {
        return this.input;
    }
}
exports.JovoInputBuilder = JovoInputBuilder;
//# sourceMappingURL=JovoInputBuilder.js.map