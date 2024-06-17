"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateChildComponentsError = void 0;
const common_1 = require("@jovotech/common");
// TODO improve
class DuplicateChildComponentsError extends common_1.JovoError {
    constructor(componentName, parentName) {
        super({
            message: `Duplicate component-name ${componentName} found in child-components of ${parentName}.`,
        });
    }
}
exports.DuplicateChildComponentsError = DuplicateChildComponentsError;
//# sourceMappingURL=DuplicateChildComponentsError.js.map