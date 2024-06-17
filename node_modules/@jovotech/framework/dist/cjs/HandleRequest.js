"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleRequest = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const Extensible_1 = require("./Extensible");
const index_1 = require("./index");
class HandleRequest extends Extensible_1.Extensible {
    constructor(app, server) {
        super((0, lodash_clonedeep_1.default)(app.config));
        this.app = app;
        this.server = server;
        (0, lodash_merge_1.default)(this, (0, lodash_clonedeep_1.default)(app));
    }
    get platforms() {
        return Object.values(this.plugins).filter((plugin) => plugin instanceof index_1.Platform);
    }
    // middlewareCollection will be overwritten anyways by merging with App
    initializeMiddlewareCollection() {
        return new index_1.MiddlewareCollection();
    }
    getDefaultConfig() {
        return {
            intentMap: {},
            logging: {},
        };
    }
    mount() {
        return this.mountPlugins();
    }
    dismount() {
        return this.dismountPlugins();
    }
    skipMiddlewares(...middlewares) {
        this.middlewareCollection.remove(...middlewares);
    }
    stopMiddlewareExecution() {
        this.middlewareCollection.clear();
        Object.values(this.plugins).forEach((plugin) => {
            if (plugin instanceof Extensible_1.Extensible) {
                plugin.middlewareCollection.clear();
            }
        });
    }
}
exports.HandleRequest = HandleRequest;
//# sourceMappingURL=HandleRequest.js.map