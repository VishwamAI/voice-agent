"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreRequestBuilder = void 0;
const framework_1 = require("@jovotech/framework");
const path_1 = require("path");
const CoreRequest_1 = require("./CoreRequest");
class CoreRequestBuilder extends framework_1.RequestBuilder {
    launch(json) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const launchJson = require((0, path_1.join)(__dirname, '..', '..', 'sample-requests', 'LaunchRequest.json'));
        const request = Object.create(CoreRequest_1.CoreRequest.prototype);
        return Object.assign(request, json || launchJson);
    }
    intent(nameOrJson) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const intentJson = require((0, path_1.join)(__dirname, '..', '..', 'sample-requests', 'IntentRequest.json'));
        const request = Object.create(CoreRequest_1.CoreRequest.prototype);
        if (typeof nameOrJson === 'string') {
            Object.assign(request, intentJson);
            request.setIntent(nameOrJson);
        }
        else {
            Object.assign(request, nameOrJson || intentJson);
        }
        return request;
    }
}
exports.CoreRequestBuilder = CoreRequestBuilder;
//# sourceMappingURL=CoreRequestBuilder.js.map