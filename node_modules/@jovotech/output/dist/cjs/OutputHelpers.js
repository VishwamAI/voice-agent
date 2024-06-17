"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputHelpers = void 0;
class OutputHelpers {
    static randomize(items) {
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    }
}
exports.OutputHelpers = OutputHelpers;
//# sourceMappingURL=OutputHelpers.js.map