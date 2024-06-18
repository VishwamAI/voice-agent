"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleResponsesOutputTemplateConverterStrategy = void 0;
const OutputTemplateConverterStrategy_1 = require("../OutputTemplateConverterStrategy");
/**
 * Strategy that can have multiple OutputTemplates and multiple Responses.
 */
class MultipleResponsesOutputTemplateConverterStrategy extends OutputTemplateConverterStrategy_1.OutputTemplateConverterStrategy {
    normalizeOutput(output) {
        const normalizedOutput = super.normalizeOutput(output);
        if (!this.shouldSanitize()) {
            return normalizedOutput;
        }
        return Array.isArray(normalizedOutput)
            ? normalizedOutput.map((outputItem, index) => this.sanitizeOutput(outputItem, index))
            : this.sanitizeOutput(normalizedOutput);
    }
    toResponse(output) {
        return Array.isArray(output)
            ? output
                .map((outputItem) => this.convertOutput(outputItem))
                .reduce((accumulator, currentValue) => {
                if (Array.isArray(currentValue)) {
                    accumulator.push(...currentValue);
                }
                else {
                    accumulator.push(currentValue);
                }
                return accumulator;
            }, [])
            : this.convertOutput(output);
    }
    fromResponse(responseOrResponses) {
        return Array.isArray(responseOrResponses)
            ? responseOrResponses.map((responseItem) => this.convertResponse(responseItem))
            : this.convertResponse(responseOrResponses);
    }
}
exports.MultipleResponsesOutputTemplateConverterStrategy = MultipleResponsesOutputTemplateConverterStrategy;
//# sourceMappingURL=MultipleResponsesOutputTemplateConverterStrategy.js.map