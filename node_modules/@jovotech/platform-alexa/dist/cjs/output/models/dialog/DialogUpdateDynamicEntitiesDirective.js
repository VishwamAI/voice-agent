"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogUpdateDynamicEntitiesDirective = exports.DynamicEntitiesUpdateBehavior = void 0;
const output_1 = require("@jovotech/output");
const IsValidDynamicEntitiesSlotTypesArray_1 = require("../../decorators/validation/IsValidDynamicEntitiesSlotTypesArray");
const SlotType_1 = require("../common/SlotType");
const Directive_1 = require("../Directive");
var DynamicEntitiesUpdateBehavior;
(function (DynamicEntitiesUpdateBehavior) {
    DynamicEntitiesUpdateBehavior["Replace"] = "REPLACE";
    DynamicEntitiesUpdateBehavior["Clear"] = "CLEAR";
})(DynamicEntitiesUpdateBehavior = exports.DynamicEntitiesUpdateBehavior || (exports.DynamicEntitiesUpdateBehavior = {}));
class DialogUpdateDynamicEntitiesDirective extends Directive_1.Directive {
    constructor() {
        super();
        this.type = 'Dialog.UpdateDynamicEntities';
    }
}
__decorate([
    (0, output_1.Equals)('Dialog.UpdateDynamicEntities'),
    __metadata("design:type", String)
], DialogUpdateDynamicEntitiesDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsEnum)(DynamicEntitiesUpdateBehavior),
    __metadata("design:type", String)
], DialogUpdateDynamicEntitiesDirective.prototype, "updateBehavior", void 0);
__decorate([
    (0, IsValidDynamicEntitiesSlotTypesArray_1.IsValidDynamicEntitiesSlotTypesArray)(),
    (0, output_1.Type)(() => SlotType_1.SlotType),
    __metadata("design:type", Array)
], DialogUpdateDynamicEntitiesDirective.prototype, "types", void 0);
exports.DialogUpdateDynamicEntitiesDirective = DialogUpdateDynamicEntitiesDirective;
//# sourceMappingURL=DialogUpdateDynamicEntitiesDirective.js.map