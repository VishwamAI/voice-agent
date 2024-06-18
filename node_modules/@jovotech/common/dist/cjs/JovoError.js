"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoError = void 0;
class JovoError extends Error {
    constructor(messageOrOptions) {
        super(typeof messageOrOptions === 'string' ? messageOrOptions : messageOrOptions.message);
        if (typeof messageOrOptions === 'string') {
            this.name = this.constructor.name;
        }
        else {
            this.name = messageOrOptions.name || this.constructor.name;
            if (messageOrOptions.package) {
                this.package = messageOrOptions.package;
            }
            if (messageOrOptions.context) {
                this.context = messageOrOptions.context;
            }
            if (messageOrOptions.hint) {
                this.hint = messageOrOptions.hint;
            }
            if (messageOrOptions.learnMore) {
                this.learnMore = messageOrOptions.learnMore;
            }
        }
    }
    // Used by JSON.stringify.
    toJSON() {
        return Object.assign(Object.assign({}, this), { message: this.message });
    }
}
exports.JovoError = JovoError;
//# sourceMappingURL=JovoError.js.map