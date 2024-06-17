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
exports.TableCell = exports.TableRow = exports.TableColumn = exports.HorizontalAlignment = exports.Table = void 0;
const output_1 = require("@jovotech/output");
const Image_1 = require("../common/Image");
const Link_1 = require("../common/Link");
class Table {
}
__decorate([
    (0, output_1.ValidateIf)((o) => o.title || o.subtitle),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Table.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Table.prototype, "subtitle", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Table.prototype, "image", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => TableColumn),
    __metadata("design:type", Array)
], Table.prototype, "columns", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => TableRow),
    __metadata("design:type", Array)
], Table.prototype, "rows", void 0);
__decorate([
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Link_1.Link),
    (0, output_1.IsOptional)(),
    __metadata("design:type", Link_1.Link)
], Table.prototype, "button", void 0);
exports.Table = Table;
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment["Unspecified"] = "UNSPECIFIED";
    HorizontalAlignment["Leading"] = "LEADING";
    HorizontalAlignment["Center"] = "CENTER";
    HorizontalAlignment["Trailing"] = "TRAILING";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
class TableColumn {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TableColumn.prototype, "header", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(HorizontalAlignment),
    __metadata("design:type", String)
], TableColumn.prototype, "align", void 0);
exports.TableColumn = TableColumn;
class TableRow {
}
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => TableCell),
    __metadata("design:type", Array)
], TableRow.prototype, "cells", void 0);
__decorate([
    (0, output_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], TableRow.prototype, "divider", void 0);
exports.TableRow = TableRow;
class TableCell {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TableCell.prototype, "text", void 0);
exports.TableCell = TableCell;
//# sourceMappingURL=Table.js.map