"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputValidationError = void 0;
const __1 = require("..");
class OutputValidationError extends Error {
    constructor(validationErrors, prefix = '') {
        super();
        this.validationErrors = validationErrors;
        this.prefix = prefix;
        this.message = (0, __1.formatValidationErrors)(validationErrors, {
            text: `${prefix}ValidationErrors:`,
        });
    }
}
exports.OutputValidationError = OutputValidationError;
//# sourceMappingURL=OutputValidationError.js.map