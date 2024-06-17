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
exports.CollectionItem = exports.Collection = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../../constants");
const Image_1 = require("../common/Image");
class Collection {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Collection.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Collection.prototype, "subtitle", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ArrayMinSize)(constants_1.COLLECTION_MIN_SIZE),
    (0, output_1.ArrayMaxSize)(constants_1.COLLECTION_MAX_SIZE),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => CollectionItem),
    __metadata("design:type", Array)
], Collection.prototype, "items", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsEnum)(Image_1.ImageFill),
    __metadata("design:type", String)
], Collection.prototype, "imageFill", void 0);
exports.Collection = Collection;
class CollectionItem {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CollectionItem.prototype, "key", void 0);
exports.CollectionItem = CollectionItem;
//# sourceMappingURL=Collection.js.map