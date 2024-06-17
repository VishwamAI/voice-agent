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
exports.AplOperation = exports.AplOperationType = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
var AplOperationType;
(function (AplOperationType) {
    AplOperationType["InsertItem"] = "InsertItem";
    AplOperationType["InsertItems"] = "InsertMultipleItems";
    AplOperationType["SetItem"] = "SetItem";
    AplOperationType["DeleteItem"] = "DeleteItem";
    AplOperationType["DeleteItems"] = "DeleteMultipleItems";
})(AplOperationType = exports.AplOperationType || (exports.AplOperationType = {}));
class AplOperation {
}
__decorate([
    (0, output_1.IsEnum)(AplOperationType),
    __metadata("design:type", String)
], AplOperation.prototype, "type", void 0);
__decorate([
    (0, output_1.IsInt)(),
    (0, output_1.Min)(constants_1.APL_INDEX_MIN),
    __metadata("design:type", Number)
], AplOperation.prototype, "index", void 0);
exports.AplOperation = AplOperation;
//# sourceMappingURL=AplOperation.js.map