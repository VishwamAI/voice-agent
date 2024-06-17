"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreOutputTemplateConverterStrategy = void 0;
const output_1 = require("@jovotech/output");
const CoreResponse_1 = require("../CoreResponse");
class CoreOutputTemplateConverterStrategy extends output_1.OutputTemplateConverterStrategy {
    constructor() {
        super(...arguments);
        this.responseClass = CoreResponse_1.CoreResponse;
        this.platformName = 'core';
    }
    toResponse(output) {
        output = Array.isArray(output) ? output : [output];
        const response = this.normalizeResponse({
            version: '4.0.0',
            platform: 'core',
            output,
            context: {
                request: {},
                session: {
                    end: false,
                    data: {},
                },
                user: {
                    data: {},
                },
            },
        });
        let mergedListen;
        output.forEach((outputItem) => {
            var _a, _b;
            mergedListen = (0, output_1.mergeListen)(mergedListen, outputItem.listen);
            if ((_b = (_a = outputItem.platforms) === null || _a === void 0 ? void 0 : _a.core) === null || _b === void 0 ? void 0 : _b.nativeResponse) {
                (0, output_1.mergeInstances)(response, outputItem.platforms.core.nativeResponse);
            }
        });
        response.context.session.end = !(mergedListen !== null && mergedListen !== void 0 ? mergedListen : true);
        return response;
    }
    fromResponse(response) {
        return response.output;
    }
}
exports.CoreOutputTemplateConverterStrategy = CoreOutputTemplateConverterStrategy;
//# sourceMappingURL=CoreOutputTemplateConverterStrategy.js.map