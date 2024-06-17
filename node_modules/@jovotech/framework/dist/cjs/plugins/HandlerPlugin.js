"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerPlugin = void 0;
const Plugin_1 = require("../Plugin");
class HandlerPlugin extends Plugin_1.Plugin {
    getDefaultConfig() {
        return {};
    }
    mount(parent) {
        parent.middlewareCollection.use('dialogue.logic', (jovo) => {
            return this.handle(jovo);
        });
    }
    async handle(jovo) {
        var _a;
        if (!jovo.$route) {
            return;
        }
        // get the node at the resolved route-path
        const componentNode = jovo.$handleRequest.componentTree.getNodeAtOrFail(jovo.$route.resolved.path);
        // update the state-stack if the component is not global
        if (!componentNode.metadata.isGlobal) {
            const stackItem = {
                component: componentNode.path.join('.'),
            };
            // if no state-stack exists, initialize it and add the new item
            if (!((_a = jovo.$session.state) === null || _a === void 0 ? void 0 : _a.length)) {
                jovo.$session.state = [stackItem];
            }
            else {
                if (jovo.$route.resolved.stackIndex !== undefined) {
                    jovo.$session.state.splice(jovo.$route.resolved.stackIndex + 1);
                }
                const currentStateStackItem = jovo.$session.state[jovo.$session.state.length - 1];
                // if the component path is a different one, omit every custom component data (resolve, config, $data)
                if (stackItem.component !== currentStateStackItem.component) {
                    jovo.$session.state[jovo.$session.state.length - 1] = stackItem;
                }
            }
        }
        // update the active component node in handleRequest to keep track of the state
        jovo.$handleRequest.activeComponentNode = componentNode;
        // execute the component's handler
        await componentNode.executeHandler({
            jovo,
            handler: jovo.$route.resolved.handler,
        });
    }
}
exports.HandlerPlugin = HandlerPlugin;
//# sourceMappingURL=HandlerPlugin.js.map