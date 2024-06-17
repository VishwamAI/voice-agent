"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.If = void 0;
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
const If = (conditionFunction) => (0, HandlerOptionMetadata_1.createHandlerOptionDecorator)({ if: conditionFunction });
exports.If = If;
//# sourceMappingURL=If.js.map