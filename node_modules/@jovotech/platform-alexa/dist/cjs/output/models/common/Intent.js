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
exports.Intent = exports.ConfirmationStatus = void 0;
const output_1 = require("@jovotech/output");
const Slot_1 = require("./Slot");
var ConfirmationStatus;
(function (ConfirmationStatus) {
    ConfirmationStatus["None"] = "NONE";
    ConfirmationStatus["Confirmed"] = "CONFIRMED";
    ConfirmationStatus["Denied"] = "DENIED";
})(ConfirmationStatus = exports.ConfirmationStatus || (exports.ConfirmationStatus = {}));
class Intent {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Intent.prototype, "name", void 0);
__decorate([
    (0, output_1.IsEnum)(ConfirmationStatus),
    __metadata("design:type", String)
], Intent.prototype, "confirmationStatus", void 0);
__decorate([
    (0, output_1.IsObject)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.TransformMap)(() => Slot_1.Slot),
    __metadata("design:type", Object)
], Intent.prototype, "slots", void 0);
exports.Intent = Intent;
//# sourceMappingURL=Intent.js.map