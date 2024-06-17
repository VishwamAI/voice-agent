"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoHistory = void 0;
const index_1 = require("./index");
const class_transformer_1 = require("class-transformer");
class JovoHistory {
    constructor(platform, items = []) {
        this.items = items;
        this.platform = platform;
    }
    get prev() {
        return this.items.length > 0 ? this.items[0] : undefined;
    }
    getPersistableData() {
        return {
            items: this.items,
        };
    }
    setPersistableData(data) {
        this.items = (data === null || data === void 0 ? void 0 : data.items) || [];
        for (const item of this.items) {
            if (item.request) {
                item.request = (0, class_transformer_1.plainToClass)(this.platform.requestClass, item.request);
            }
            if (item.response) {
                item.response = (0, class_transformer_1.plainToClass)(this.platform.outputTemplateConverterStrategy.responseClass, item.response);
            }
            if (item.input) {
                item.input = (0, class_transformer_1.plainToClass)(index_1.JovoInput, item.input);
            }
        }
        return this;
    }
}
exports.JovoHistory = JovoHistory;
//# sourceMappingURL=JovoHistory.js.map