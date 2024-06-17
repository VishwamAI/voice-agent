"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAssistantHandles = void 0;
const framework_1 = require("@jovotech/framework");
class GoogleAssistantHandles {
    static onScene(sceneName) {
        return {
            types: [framework_1.InputType.Intent],
            platforms: ['googleAssistant'],
            if: (jovo) => { var _a; return ((_a = jovo.$request.scene) === null || _a === void 0 ? void 0 : _a.name) === sceneName; },
        };
    }
}
exports.GoogleAssistantHandles = GoogleAssistantHandles;
//# sourceMappingURL=GoogleAssistantHandles.js.map