"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSettingsApiErrors = exports.getSystemTimeZone = exports.TIMEZONE = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
exports.TIMEZONE = 'System.timeZone';
async function getSystemTimeZone(apiEndpoint, deviceId, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v2/devices/${deviceId}/settings/${exports.TIMEZONE}`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleSettingsApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getSystemTimeZone = getSystemTimeZone;
// TODO: distance measurement
// TODO: temperature measurement
// TODO: needs to be refactored after completion of all Alexa APIs
function handleSettingsApiErrors(error) {
    var _a, _b;
    if (error.isAxiosError) {
        const { message, code } = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || {};
        let errorCode = AlexaApi_1.AlexaApiErrorCode.ERROR;
        if (((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_USER_PERMISSION;
        }
        if (code === 'ALERT_NOT_FOUND') {
            errorCode = AlexaApi_1.AlexaApiErrorCode.ALERT_NOT_FOUND;
        }
        // Dev needs to set correct permissions in ASK console
        if (message === 'Access to this resource cannot be requested.' ||
            (code === 'ACCESS_DENIED' && message === 'Access denied with reason: FORBIDDEN')) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_SKILL_PERMISSION;
        }
        throw new AlexaApi_1.AlexaApiError({ message: error.message, code: errorCode });
    }
    throw new framework_1.JovoError({ message: error.message });
}
exports.handleSettingsApiErrors = handleSettingsApiErrors;
//# sourceMappingURL=SettingsApi.js.map