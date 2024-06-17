"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPlugin = void 0;
const BaseComponent_1 = require("./BaseComponent");
const Plugin_1 = require("./Plugin");
class ComponentPlugin extends Plugin_1.Plugin {
    install(app) {
        let options = undefined;
        if (this.config.component) {
            options = {
                config: this.config.component,
            };
        }
        app.use(new BaseComponent_1.ComponentDeclaration(this.component, options));
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mount() { }
}
exports.ComponentPlugin = ComponentPlugin;
//# sourceMappingURL=ComponentPlugin.js.map