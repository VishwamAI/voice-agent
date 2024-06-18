"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsPlugin = void 0;
const Plugin_1 = require("../Plugin");
class AnalyticsPlugin extends Plugin_1.Plugin {
    mount(parent) {
        parent.middlewareCollection.use('after.interpretation.nlu', this.trackRequest.bind(this));
        parent.middlewareCollection.use('after.response.end', this.trackResponse.bind(this));
    }
}
exports.AnalyticsPlugin = AnalyticsPlugin;
//# sourceMappingURL=AnalyticsPlugin.js.map