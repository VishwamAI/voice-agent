"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApiRequest = exports.AlexaApiError = exports.AlexaApiErrorCode = void 0;
const framework_1 = require("@jovotech/framework");
const url_1 = require("url");
var AlexaApiErrorCode;
(function (AlexaApiErrorCode) {
    AlexaApiErrorCode["PARSE_ERROR"] = "PARSE_ERROR";
    AlexaApiErrorCode["ACCESS_NOT_REQUESTED"] = "ACCESS_NOT_REQUESTED";
    AlexaApiErrorCode["NO_USER_PERMISSION"] = "NO_USER_PERMISSION";
    AlexaApiErrorCode["NO_SKILL_PERMISSION"] = "NO_SKILL_PERMISSION";
    AlexaApiErrorCode["LIST_NOT_FOUND"] = "LIST_NOT_FOUND";
    AlexaApiErrorCode["ITEM_NOT_FOUND"] = "ITEM_NOT_FOUND";
    AlexaApiErrorCode["DEVICE_NOT_SUPPORTED"] = "DEVICE_NOT_SUPPORTED";
    AlexaApiErrorCode["ALERT_NOT_FOUND"] = "ALERT_NOT_FOUND";
    AlexaApiErrorCode["ERROR"] = "ERROR";
})(AlexaApiErrorCode = exports.AlexaApiErrorCode || (exports.AlexaApiErrorCode = {}));
class AlexaApiError extends framework_1.JovoError {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { message: `Request to Alexa API failed: ${options.message}` }));
        this.code = options.code;
    }
}
exports.AlexaApiError = AlexaApiError;
/**
 * Parses options and sends a request to the specified API endpoint
 * @param options - API options
 */
async function sendApiRequest(options) {
    const url = new url_1.URL(options.path, options.endpoint);
    const config = {
        url: url.href,
        data: options.data,
        method: options.method || 'GET',
        headers: Object.assign({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${options.permissionToken}` }, options.headers),
        params: options.params,
    };
    return await (0, framework_1.axios)(config);
}
exports.sendApiRequest = sendApiRequest;
//# sourceMappingURL=AlexaApi.js.map