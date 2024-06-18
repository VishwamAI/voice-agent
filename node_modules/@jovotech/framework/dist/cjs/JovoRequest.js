"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoRequest = void 0;
const index_1 = require("./index");
const JovoInputBuilder_1 = require("./JovoInputBuilder");
class JovoRequest {
    getInput() {
        return new JovoInputBuilder_1.JovoInputBuilder(this.getInputType() || index_1.DEFAULT_INPUT_TYPE)
            .set('intent', this.getIntent())
            .set('entities', this.getEntities())
            .set('text', this.getInputText())
            .set('audio', this.getInputAudio())
            .build();
    }
    getSession() {
        const sessionId = this.getSessionId();
        const sessionData = this.getSessionData();
        const isNewSession = this.isNewSession();
        return !sessionId && !sessionData && typeof isNewSession === 'undefined'
            ? undefined
            : Object.assign(Object.assign({}, (isNewSession ? {} : sessionData || {})), { id: sessionId, isNew: isNewSession });
    }
}
exports.JovoRequest = JovoRequest;
//# sourceMappingURL=JovoRequest.js.map