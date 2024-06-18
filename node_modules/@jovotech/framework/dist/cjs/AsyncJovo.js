"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncJovo = void 0;
const output_1 = require("@jovotech/output");
const Jovo_1 = require("./Jovo");
class AsyncJovo extends Jovo_1.Jovo {
    async $send(outputConstructorOrTemplateOrMessage, options) {
        const currentOutputLength = this.$output.length;
        if (typeof outputConstructorOrTemplateOrMessage === 'function') {
            await super.$send(outputConstructorOrTemplateOrMessage, options);
        }
        else {
            await super.$send(outputConstructorOrTemplateOrMessage);
        }
        // get only the newly added output
        const newOutput = this.$output.slice(currentOutputLength);
        const outputConverter = new output_1.OutputTemplateConverter(this.$platform.outputTemplateConverterStrategy);
        let response = await outputConverter.toResponse(newOutput);
        response = await this.$platform.finalizeResponse(response, this);
        if (Array.isArray(response)) {
            for (const responseItem of response) {
                await this.sendResponse(responseItem);
            }
        }
        else if (response) {
            await this.sendResponse(response);
        }
    }
}
exports.AsyncJovo = AsyncJovo;
//# sourceMappingURL=AsyncJovo.js.map