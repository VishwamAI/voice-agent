"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestOutputConverterStrategy = void 0;
const output_1 = require("@jovotech/output");
const TestResponse_1 = require("./TestResponse");
class TestOutputConverterStrategy extends output_1.SingleResponseOutputTemplateConverterStrategy {
    constructor() {
        super(...arguments);
        this.responseClass = TestResponse_1.TestResponse;
        this.platformName = 'testPlatform';
    }
    sanitizeOutput(output) {
        return output;
    }
    toResponse(output) {
        const response = this.normalizeResponse({
            isTestResponse: true,
        });
        if (typeof output.listen == 'undefined') {
            response.shouldEndSession = !output.listen;
        }
        return response;
    }
    fromResponse() {
        return {};
    }
}
exports.TestOutputConverterStrategy = TestOutputConverterStrategy;
//# sourceMappingURL=TestOutputConverterStrategy.js.map