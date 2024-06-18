"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookIdNotFoundError = void 0;
const framework_1 = require("@jovotech/framework");
class WebhookIdNotFoundError extends framework_1.JovoError {
    constructor(configPath) {
        super({
            message: `Can not load webhook id from config at ${configPath}.`,
        });
        this.configPath = configPath;
    }
}
exports.WebhookIdNotFoundError = WebhookIdNotFoundError;
//# sourceMappingURL=WebhookIdNotFoundError.js.map