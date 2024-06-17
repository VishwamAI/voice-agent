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
exports.Scene = exports.SlotFillingStatus = exports.NextScene = void 0;
const output_1 = require("@jovotech/output");
class NextScene {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], NextScene.prototype, "name", void 0);
exports.NextScene = NextScene;
var SlotFillingStatus;
(function (SlotFillingStatus) {
    SlotFillingStatus["Unspecified"] = "UNSPECIFIED";
    SlotFillingStatus["Initialized"] = "INITIALIZED";
    SlotFillingStatus["Collecting"] = "COLLECTING";
    SlotFillingStatus["Final"] = "FINAL";
})(SlotFillingStatus = exports.SlotFillingStatus || (exports.SlotFillingStatus = {}));
class Scene {
}
__decorate([
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], Scene.prototype, "name", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(SlotFillingStatus),
    __metadata("design:type", String)
], Scene.prototype, "slotFillingStatus", void 0);
__decorate([
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], Scene.prototype, "slots", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => NextScene),
    __metadata("design:type", NextScene)
], Scene.prototype, "next", void 0);
exports.Scene = Scene;
//# sourceMappingURL=Scene.js.map