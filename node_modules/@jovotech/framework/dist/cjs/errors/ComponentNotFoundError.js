"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentNotFoundError = void 0;
const common_1 = require("@jovotech/common");
// TODO: improve
class ComponentNotFoundError extends common_1.JovoError {
    constructor(componentPath) {
        super({
            message: `Could not find component ${componentPath[componentPath.length - 1]} neither in children of ${componentPath.join('.')} nor in root.`,
        });
    }
}
exports.ComponentNotFoundError = ComponentNotFoundError;
//# sourceMappingURL=ComponentNotFoundError.js.map