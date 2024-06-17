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
exports.AplInsertItemOperation = void 0;
const output_1 = require("@jovotech/output");
const AplOperation_1 = require("../AplOperation");
class AplInsertItemOperation extends AplOperation_1.AplOperation {
}
__decorate([
    (0, output_1.Equals)(AplOperation_1.AplOperationType.InsertItem),
    __metadata("design:type", String)
], AplInsertItemOperation.prototype, "type", void 0);
__decorate([
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], AplInsertItemOperation.prototype, "item", void 0);
exports.AplInsertItemOperation = AplInsertItemOperation;
//# sourceMappingURL=AplInsertItemOperation.js.map