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
exports.AplUpdateIndexListDirective = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
const AplIndexListDirective_1 = require("./AplIndexListDirective");
const AplOperation_1 = require("./AplOperation");
const AplDeleteItemOperation_1 = require("./operations/AplDeleteItemOperation");
const AplDeleteItemsOperation_1 = require("./operations/AplDeleteItemsOperation");
const AplInsertItemOperation_1 = require("./operations/AplInsertItemOperation");
const AplInsertItemsOperation_1 = require("./operations/AplInsertItemsOperation");
const AplSetItemOperation_1 = require("./operations/AplSetItemOperation");
class AplUpdateIndexListDirective extends AplIndexListDirective_1.AplIndexListDirective {
}
__decorate([
    (0, output_1.Equals)('Alexa.Presentation.APL.UpdateIndexListData'),
    __metadata("design:type", String)
], AplUpdateIndexListDirective.prototype, "type", void 0);
__decorate([
    (0, output_1.IsInt)(),
    (0, output_1.Min)(constants_1.APL_LIST_VERSION_MIN),
    __metadata("design:type", Number)
], AplUpdateIndexListDirective.prototype, "listVersion", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => AplOperation_1.AplOperation, {
        keepDiscriminatorProperty: true,
        discriminator: {
            property: 'type',
            subTypes: [
                { value: AplInsertItemOperation_1.AplInsertItemOperation, name: AplOperation_1.AplOperationType.InsertItem },
                { value: AplInsertItemsOperation_1.AplInsertItemsOperation, name: AplOperation_1.AplOperationType.InsertItems },
                { value: AplSetItemOperation_1.AplSetItemOperation, name: AplOperation_1.AplOperationType.SetItem },
                { value: AplDeleteItemOperation_1.AplDeleteItemOperation, name: AplOperation_1.AplOperationType.DeleteItem },
                { value: AplDeleteItemsOperation_1.AplDeleteItemsOperation, name: AplOperation_1.AplOperationType.DeleteItems },
            ],
        },
    }),
    __metadata("design:type", Array)
], AplUpdateIndexListDirective.prototype, "operations", void 0);
exports.AplUpdateIndexListDirective = AplUpdateIndexListDirective;
//# sourceMappingURL=AplUpdateIndexListDirective.js.map