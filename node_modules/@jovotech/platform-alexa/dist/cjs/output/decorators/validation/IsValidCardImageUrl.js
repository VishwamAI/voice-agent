"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidCardImageUrl = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
function IsValidCardImageUrl(options) {
    return (0, output_1.IsEitherValid)({
        name: 'isValidCardImageUrl',
        keys: ['smallImageUrl', 'largeImageUrl'],
        validate: async (value) => {
            if (!(0, output_1.isString)(value) || !(0, output_1.isURL)(value, { protocols: ['https'] })) {
                return '$property must be an URL address';
            }
            if (value.length > constants_1.CARD_IMAGE_URL_MAX_LENGTH) {
                return `$property can not exceed ${constants_1.CARD_IMAGE_URL_MAX_LENGTH} characters.`;
            }
            return;
        },
    }, options);
}
exports.IsValidCardImageUrl = IsValidCardImageUrl;
//# sourceMappingURL=IsValidCardImageUrl.js.map