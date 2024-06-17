"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbPlugin = exports.DEFAULT_SESSION_EXPIRES_AFTER_SECONDS = void 0;
const __1 = require("..");
const Plugin_1 = require("../Plugin");
exports.DEFAULT_SESSION_EXPIRES_AFTER_SECONDS = 900;
class DbPlugin extends Plugin_1.Plugin {
    constructor(config) {
        super(config);
        for (const prop in this.config.storedElements) {
            if (this.config.storedElements.hasOwnProperty(prop)) {
                if (this.config.storedElements[prop] &&
                    typeof this.config.storedElements[prop] === 'boolean') {
                    this.config.storedElements[prop] = {
                        enabled: this.config.storedElements[prop],
                    };
                }
                if (this.config.storedElements[prop] &&
                    typeof this.config.storedElements[prop] === 'object' &&
                    typeof this.config.storedElements[prop].enabled === 'undefined') {
                    this.config.storedElements[prop].enabled = true;
                }
            }
        }
    }
    getDefaultConfig() {
        return {
            enabled: true,
            storedElements: {
                user: {
                    enabled: true,
                },
                session: {
                    enabled: false,
                    expiresAfterSeconds: exports.DEFAULT_SESSION_EXPIRES_AFTER_SECONDS,
                },
                history: {
                    size: 3,
                    enabled: false,
                    output: true,
                    nlu: true,
                    asr: false,
                    state: false,
                    request: false,
                    response: false,
                },
                createdAt: true,
                updatedAt: true,
            },
        };
    }
    mount(parent) {
        if (!(parent instanceof __1.HandleRequest)) {
            throw new __1.InvalidParentError(this.name, __1.HandleRequest);
        }
        parent.middlewareCollection.use('request.end', (jovo) => {
            if (!jovo.$user.id) {
                return;
            }
            return this.loadData(jovo.$user.id, jovo);
        });
        parent.middlewareCollection.use('response.end', (jovo) => {
            if (!jovo.$user.id) {
                return;
            }
            return this.saveData(jovo.$user.id, jovo);
        });
    }
    async applyPersistableData(jovo, item) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const persistableData = jovo.getPersistableData();
        // iterate through persistable data and check for enabled properties
        for (const prop in persistableData) {
            if (persistableData.hasOwnProperty(prop) &&
                (((_a = this.config.storedElements) === null || _a === void 0 ? void 0 : _a[prop]) === true ||
                    ((_b = this.config.storedElements) === null || _b === void 0 ? void 0 : _b[prop]).enabled)) {
                if (prop === 'history') {
                    // different saving behavior for history elements
                    const historyLastItem = jovo.getCurrentHistoryItem();
                    const newHistoryItem = {};
                    if (((_c = this.config.storedElements) === null || _c === void 0 ? void 0 : _c.history) &&
                        typeof ((_d = this.config.storedElements) === null || _d === void 0 ? void 0 : _d.history) === 'object') {
                        // iterate through history properties, skip reserved properties
                        for (const propHistory in (_e = this.config.storedElements) === null || _e === void 0 ? void 0 : _e.history) {
                            const reservedPropertyNames = ['size', 'enabled'];
                            if ((_f = this.config.storedElements) === null || _f === void 0 ? void 0 : _f.history.hasOwnProperty(propHistory)) {
                                if (reservedPropertyNames.includes(propHistory)) {
                                    continue;
                                }
                                if ((_g = this.config.storedElements) === null || _g === void 0 ? void 0 : _g.history[propHistory]) {
                                    // check for custom stored history elements with access functions
                                    if (typeof ((_h = this.config.storedElements) === null || _h === void 0 ? void 0 : _h.history[propHistory]) === 'function') {
                                        const func = (_j = this.config.storedElements) === null || _j === void 0 ? void 0 : _j.history[propHistory];
                                        newHistoryItem[propHistory] = await func(jovo);
                                    }
                                    else {
                                        // default history item like nlu, output etc
                                        newHistoryItem[propHistory] = historyLastItem[propHistory];
                                    }
                                }
                            }
                        }
                    }
                    // put latest history item on first position in array
                    item[prop] = {
                        items: [newHistoryItem].concat(persistableData.history.items),
                    };
                    // remove trailing history items
                    item[prop].items = item[prop].items.slice(0, ((_k = this.config.storedElements) === null || _k === void 0 ? void 0 : _k.history).size);
                }
                else {
                    item[prop] = persistableData[prop];
                }
            }
        }
    }
}
exports.DbPlugin = DbPlugin;
//# sourceMappingURL=DbPlugin.js.map