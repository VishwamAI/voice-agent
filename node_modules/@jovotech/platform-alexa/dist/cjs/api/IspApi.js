"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductList = void 0;
const framework_1 = require("@jovotech/framework");
const AlexaApi_1 = require("./AlexaApi");
async function getProductList(apiEndpoint, permissionToken, language, params) {
    const options = {
        endpoint: apiEndpoint,
        path: `/v1/users/~current/skills/~current/inSkillProducts`,
        permissionToken,
        headers: {
            'Accept-Language': language,
        },
        params,
    };
    try {
        const response = await (0, AlexaApi_1.sendApiRequest)(options);
        return response.data;
    }
    catch (error) {
        if (error.isAxiosError) {
            const { message } = error.response.data;
            throw new framework_1.JovoError({ message });
        }
        throw new framework_1.JovoError({ message: error.message });
    }
}
exports.getProductList = getProductList;
//# sourceMappingURL=IspApi.js.map