"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputPlugin = void 0;
const output_1 = require("@jovotech/output");
const Plugin_1 = require("../Plugin");
class OutputPlugin extends Plugin_1.Plugin {
    getDefaultConfig() {
        return {};
    }
    mount(parent) {
        parent.middlewareCollection.use('response.output', (jovo) => {
            return this.handle(jovo);
        });
    }
    async handle(jovo) {
        const converter = new output_1.OutputTemplateConverter(jovo.$platform.outputTemplateConverterStrategy);
        // TODO: catch possible errors
        const response = await converter.toResponse(jovo.$output);
        jovo.$response = await jovo.$platform.finalizeResponse(response, jovo);
    }
}
exports.OutputPlugin = OutputPlugin;
//# sourceMappingURL=OutputPlugin.js.map