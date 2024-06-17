"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPersonProfileApiRequest = exports.PersonProfileProperty = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
var PersonProfileProperty;
(function (PersonProfileProperty) {
    PersonProfileProperty["NAME"] = "name";
    PersonProfileProperty["GIVEN_NAME"] = "givenName";
    PersonProfileProperty["MOBILE_NUMBER"] = "mobileNumber";
})(PersonProfileProperty = exports.PersonProfileProperty || (exports.PersonProfileProperty = {}));
/**
 * Sends a request to Amazon's Person Profile API for getting profile information
 * @param profileProperty - The profile property which determines the final API endpoint url
 * @param apiEndpoint - API endpoint, differs on the geographic location of the skill
 * @param permissionToken - Token to authorize the request
 * @see {@link https://developer.amazon.com/en-US/docs/alexa/custom-skills/request-recognized-speaker-contact-information.html Request Recognized Speaker Contact Information}
 */
async function sendPersonProfileApiRequest(profileProperty, apiEndpoint, permissionToken) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v2/persons/~current/profile/${profileProperty}`,
        permissionToken,
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        if (error.isAxiosError) {
            const { message, code } = error.response.data;
            let errorCode = AlexaApi_1.AlexaApiErrorCode.ERROR;
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
}
exports.sendPersonProfileApiRequest = sendPersonProfileApiRequest;
//# sourceMappingURL=PersonProfileApi.js.map