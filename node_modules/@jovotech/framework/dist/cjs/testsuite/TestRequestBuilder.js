"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRequestBuilder = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const __1 = require("..");
const TestRequest_1 = require("./TestRequest");
class TestRequestBuilder extends __1.RequestBuilder {
    launch(json) {
        const request = new TestRequest_1.TestRequest();
        return (0, lodash_merge_1.default)(request, json);
    }
    intent(nameOrJson) {
        const request = new TestRequest_1.TestRequest();
        request.session.isNew = false;
        if (typeof nameOrJson !== 'undefined') {
            if (typeof nameOrJson === 'object') {
                return (0, lodash_merge_1.default)(request, nameOrJson);
            }
            else {
                request.setIntent(nameOrJson);
            }
        }
        return request;
    }
}
exports.TestRequestBuilder = TestRequestBuilder;
//# sourceMappingURL=TestRequestBuilder.js.map