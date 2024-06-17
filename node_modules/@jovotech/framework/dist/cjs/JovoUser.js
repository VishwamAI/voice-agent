"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoUser = void 0;
class JovoUser {
    constructor(jovo) {
        this.jovo = jovo;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.data = {};
        this.isNew = true;
    }
    get accessToken() {
        return;
    }
    getPersistableData() {
        return {
            data: this.data,
        };
    }
    setPersistableData(data) {
        this.data = (data === null || data === void 0 ? void 0 : data.data) || {};
        return this;
    }
    toJSON() {
        return Object.assign(Object.assign({}, this), { jovo: undefined });
    }
}
exports.JovoUser = JovoUser;
//# sourceMappingURL=JovoUser.js.map