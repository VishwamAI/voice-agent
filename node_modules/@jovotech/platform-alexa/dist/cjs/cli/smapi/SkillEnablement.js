"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableSkill = void 0;
const utilities_1 = require("../utilities");
async function enableSkill(skillId, stage, askProfile) {
    await (0, utilities_1.execAskCommand)('smapiEnableSkill', ['ask smapi set-skill-enablement', `-s ${skillId}`, `-g ${stage}`], askProfile);
}
exports.enableSkill = enableSkill;
//# sourceMappingURL=SkillEnablement.js.map