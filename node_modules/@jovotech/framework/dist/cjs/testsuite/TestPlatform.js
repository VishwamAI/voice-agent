"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPlatform = void 0;
const __1 = require("..");
const TestDevice_1 = require("./TestDevice");
const TestJovo_1 = require("./TestJovo");
const TestOutputConverterStrategy_1 = require("./TestOutputConverterStrategy");
const TestRequest_1 = require("./TestRequest");
const TestRequestBuilder_1 = require("./TestRequestBuilder");
const TestUser_1 = require("./TestUser");
class TestPlatform extends __1.Platform {
    constructor() {
        super(...arguments);
        this.id = 'testplatform';
        this.jovoClass = TestJovo_1.TestJovo;
        this.requestClass = TestRequest_1.TestRequest;
        this.outputTemplateConverterStrategy = new TestOutputConverterStrategy_1.TestOutputConverterStrategy();
        this.userClass = TestUser_1.TestUser;
        this.requestBuilder = TestRequestBuilder_1.TestRequestBuilder;
        this.deviceClass = TestDevice_1.TestDevice;
    }
    isRequestRelated(request) {
        return request.isTestRequest;
    }
    finalizeResponse(response) {
        return response;
    }
    isResponseRelated() {
        return true;
    }
    getDefaultConfig() {
        return {};
    }
}
exports.TestPlatform = TestPlatform;
//# sourceMappingURL=TestPlatform.js.map