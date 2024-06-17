"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleReminderApiErrors = exports.getReminder = exports.getAllReminders = exports.deleteReminder = exports.updateReminder = exports.setReminder = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
async function setReminder(reminder, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: '/v1/alerts/reminders',
        permissionToken,
        data: reminder,
        method: 'POST',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleReminderApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.setReminder = setReminder;
async function updateReminder(alertToken, reminder, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/alerts/reminders/${alertToken}`,
        permissionToken,
        data: reminder,
        method: 'PUT',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleReminderApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.updateReminder = updateReminder;
async function deleteReminder(alertToken, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/alerts/reminders/${alertToken}`,
        permissionToken,
        method: 'DELETE',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleReminderApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.deleteReminder = deleteReminder;
async function getAllReminders(apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: '/v1/alerts/reminders',
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        // The value for totalCount from the API is a string.
        return Object.assign(Object.assign({}, response.data), { totalCount: Number(response.data.totalCount) });
    }
    catch (error) {
        handleReminderApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getAllReminders = getAllReminders;
async function getReminder(alertToken, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/alerts/reminders/${alertToken}`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleReminderApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getReminder = getReminder;
// TODO: needs to be refactored after completion of all Alexa APIs
function handleReminderApiErrors(error) {
    var _a, _b;
    if (error.isAxiosError) {
        const { message, code } = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
        let errorCode = AlexaApi_1.AlexaApiErrorCode.ERROR;
        if (((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) === 401) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_USER_PERMISSION;
        }
        if (code === AlexaApi_1.AlexaApiErrorCode.DEVICE_NOT_SUPPORTED ||
            code === AlexaApi_1.AlexaApiErrorCode.ALERT_NOT_FOUND) {
            errorCode = code;
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
        throw new AlexaApi_1.AlexaApiError({ message, code: errorCode });
    }
    throw new framework_1.JovoError({ message: error.message });
}
exports.handleReminderApiErrors = handleReminderApiErrors;
//# sourceMappingURL=ReminderApi.js.map