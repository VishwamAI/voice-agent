"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaIsp = void 0;
const IspApi_1 = require("./api/IspApi");
class AlexaIsp {
    constructor(alexa) {
        this.alexa = alexa;
    }
    async getProductList(params) {
        return (0, IspApi_1.getProductList)(this.alexa.$request.getApiEndpoint(), this.alexa.$request.getApiAccessToken(), this.alexa.$request.getLocale(), params);
    }
    async getProductByReferenceName(referenceName) {
        const products = await this.getProductList();
        return products.inSkillProducts.find((product) => product.referenceName === referenceName);
    }
    getPurchaseResult() {
        var _a, _b;
        return (_b = (_a = this.alexa.$request.request) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.purchaseResult;
    }
    getProductId() {
        var _a, _b;
        return (_b = (_a = this.alexa.$request.request) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.productId;
    }
    toJSON() {
        return Object.assign(Object.assign({}, this), { alexa: undefined });
    }
}
exports.AlexaIsp = AlexaIsp;
//# sourceMappingURL=AlexaIsp.js.map