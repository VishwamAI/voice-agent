"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListItem = exports.getListItems = exports.getTypeOfList = exports.getLists = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
async function getLists(apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v2/householdlists`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data.lists;
    }
    catch (error) {
        handleListApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getLists = getLists;
/**
 * Returns the type of the list
 * @param listId List to check
 * @returns the type of the list
 */
function getTypeOfList(listId) {
    const decodedListId = Buffer.from(listId, 'base64').toString('utf8');
    if (decodedListId.endsWith('-SHOPPING_ITEM')) {
        return 'shopping-list';
    }
    else {
        return 'todo-list';
    }
}
exports.getTypeOfList = getTypeOfList;
async function getListItems(listId, itemIds, apiEndpoint, permissionToken) {
    return Promise.all(itemIds.map((itemId) => getListItem(listId, itemId, apiEndpoint, permissionToken)));
}
exports.getListItems = getListItems;
async function getListItem(listId, itemId, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v2/householdlists/${listId}/items/${itemId}`,
        permissionToken,
        method: 'GET',
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        handleListApiErrors(error);
    }
    throw new Error('Unexpected error.');
}
exports.getListItem = getListItem;
/**
 * Meaning of error-codes can be found here: https://developer.amazon.com/en-US/docs/alexa/list-skills/list-management-api-reference.html#get-list-item-http-status-codes
 * @param error Error to handle
 */
function handleListApiErrors(error) {
    var _a, _b;
    if (error.isAxiosError) {
        const { message } = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
        let errorCode = AlexaApi_1.AlexaApiErrorCode.ERROR;
        const status = (_b = error.response) === null || _b === void 0 ? void 0 : _b.status;
        if (status === 401) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.NO_USER_PERMISSION;
        }
        if (status === 404) {
            errorCode = AlexaApi_1.AlexaApiErrorCode.LIST_NOT_FOUND;
        }
        throw new AlexaApi_1.AlexaApiError({ message, code: errorCode });
    }
    throw new framework_1.JovoError({ message: error.message });
}
//# sourceMappingURL=ListApi.js.map