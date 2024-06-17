"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeviceLocationApiErrors = exports.getDeviceAddress = exports.getDeviceLocation = exports.COUNTRY_AND_POSTAL_CODE = exports.ADDRESS = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
exports.ADDRESS = 'address';
exports.COUNTRY_AND_POSTAL_CODE = 'address/countryAndPostalCode';
async function getDeviceLocation(apiEndpoint, deviceId, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/devices/${deviceId}/settings/${exports.COUNTRY_AND_POSTAL_CODE}`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleDeviceLocationApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getDeviceLocation = getDeviceLocation;
async function getDeviceAddress(apiEndpoint, deviceId, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/devices/${deviceId}/settings/${exports.ADDRESS}`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleDeviceLocationApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getDeviceAddress = getDeviceAddress;
// TODO: needs to be refactored after completion of all Alexa APIs
function handleDeviceLocationApiErrors(error) {
    var _a, _b;
    if (error.isAxiosError) {
        const { message, code } = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || {};
        let errorCode = AlexaApi_1.AlexaApiErrorCode.ERROR;
        if (((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_USER_PERMISSION;
        }
        if (code === 'DEVICE_NOT_SUPPORTED') {
            errorCode = AlexaApi_1.AlexaApiErrorCode.DEVICE_NOT_SUPPORTED;
        }
        if (code === 'ALERT_NOT_FOUND') {
            errorCode = AlexaApi_1.AlexaApiErrorCode.ALERT_NOT_FOUND;
        }
        // User needs to grant access in app
        if (message === 'The authentication token is not valid.' ||
            message === 'Access to this resource has not yet been requested.' ||
            (code === 'ACCESS_DENIED' && message === 'Access denied with reason: ACCESS_NOT_REQUESTED')) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_USER_PERMISSION;
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
exports.handleDeviceLocationApiErrors = handleDeviceLocationApiErrors;
//# sourceMappingURL=DeviceLocationApi.js.map