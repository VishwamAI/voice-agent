"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const enums_1 = require("../enums");
const DuplicateChildComponentsError_1 = require("../errors/DuplicateChildComponentsError");
const ComponentMetadata_1 = require("../metadata/ComponentMetadata");
const HandlerMetadata_1 = require("../metadata/HandlerMetadata");
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
const MetadataStorage_1 = require("../metadata/MetadataStorage");
const utilities_1 = require("../utilities");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Component(options) {
    return function (target) {
        if (options === null || options === void 0 ? void 0 : options.components) {
            const componentNameSet = new Set();
            options.components.forEach((component) => {
                var _a;
                const componentName = typeof component === 'function'
                    ? component.name
                    : ((_a = component.options) === null || _a === void 0 ? void 0 : _a.name) || component.component.name;
                if (componentNameSet.has(componentName)) {
                    throw new DuplicateChildComponentsError_1.DuplicateChildComponentsError(componentName, target.name);
                }
                componentNameSet.add(componentName);
            });
        }
        const metadataStorage = MetadataStorage_1.MetadataStorage.getInstance();
        const keys = (0, utilities_1.getMethodKeys)(target.prototype);
        // iterate all keys of methods of the target
        keys.forEach((key) => {
            const hasHandlerMetadata = metadataStorage.handlerMetadata.some((handlerMetadata) => handlerMetadata.target === target && handlerMetadata.propertyKey === key);
            const hasHandlerOptionMetadata = metadataStorage.handlerOptionMetadata.some((optionMetadata) => optionMetadata.target === target && optionMetadata.propertyKey === key);
            // if it is LAUNCH or END
            if (key === enums_1.BuiltInHandler.Launch || key === enums_1.BuiltInHandler.End) {
                // unshift to not overwrite any other explicitly set HandlerOptionMetadata when merging
                metadataStorage.handlerOptionMetadata.unshift(new HandlerOptionMetadata_1.HandlerOptionMetadata(target, key, {
                    global: true,
                    types: [key],
                }));
            }
            else if (!hasHandlerMetadata && !hasHandlerOptionMetadata) {
                metadataStorage.addHandlerMetadata(new HandlerMetadata_1.HandlerMetadata(target, key));
            }
        });
        metadataStorage.addComponentMetadata(new ComponentMetadata_1.ComponentMetadata(target, options));
        return;
    };
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map