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
exports.Session = exports.TypeOverride = exports.SessionParams = exports.SessionParamsReprompts = exports.TypeOverrideMode = exports.SynonymType = exports.Entry = exports.EntryDisplay = void 0;
const output_1 = require("@jovotech/output");
const Image_1 = require("./common/Image");
const OpenUrl_1 = require("./common/OpenUrl");
class EntryDisplay {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EntryDisplay.prototype, "title", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EntryDisplay.prototype, "description", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], EntryDisplay.prototype, "image", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EntryDisplay.prototype, "footer", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => OpenUrl_1.OpenUrl),
    __metadata("design:type", OpenUrl_1.OpenUrl)
], EntryDisplay.prototype, "openUrl", void 0);
exports.EntryDisplay = EntryDisplay;
class Entry {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Entry.prototype, "name", void 0);
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], Entry.prototype, "synonyms", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => EntryDisplay),
    __metadata("design:type", EntryDisplay)
], Entry.prototype, "display", void 0);
exports.Entry = Entry;
class SynonymType {
}
__decorate([
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => Entry),
    __metadata("design:type", Array)
], SynonymType.prototype, "entries", void 0);
exports.SynonymType = SynonymType;
var TypeOverrideMode;
(function (TypeOverrideMode) {
    TypeOverrideMode["Unspecified"] = "TYPE_UNSPECIFIED";
    TypeOverrideMode["Replace"] = "TYPE_REPLACE";
    TypeOverrideMode["Merge"] = "TYPE_MERGE";
})(TypeOverrideMode = exports.TypeOverrideMode || (exports.TypeOverrideMode = {}));
class SessionParamsReprompts {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SessionParamsReprompts.prototype, "NO_INPUT_1", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SessionParamsReprompts.prototype, "NO_INPUT_2", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SessionParamsReprompts.prototype, "NO_INPUT_FINAL", void 0);
exports.SessionParamsReprompts = SessionParamsReprompts;
class SessionParams {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => SessionParamsReprompts),
    __metadata("design:type", SessionParamsReprompts)
], SessionParams.prototype, "_GOOGLE_ASSISTANT_REPROMPTS_", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SessionParams.prototype, "_GOOGLE_ASSISTANT_SELECTION_INTENT_", void 0);
exports.SessionParams = SessionParams;
class TypeOverride {
}
__decorate([
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TypeOverride.prototype, "name", void 0);
__decorate([
    (0, output_1.IsEnum)(TypeOverrideMode),
    __metadata("design:type", String)
], TypeOverride.prototype, "typeOverrideMode", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => SynonymType),
    __metadata("design:type", SynonymType)
], TypeOverride.prototype, "synonym", void 0);
exports.TypeOverride = TypeOverride;
class Session {
}
__decorate([
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], Session.prototype, "id", void 0);
__decorate([
    (0, output_1.IsObject)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => SessionParams),
    __metadata("design:type", SessionParams)
], Session.prototype, "params", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => TypeOverride),
    __metadata("design:type", Array)
], Session.prototype, "typeOverrides", void 0);
__decorate([
    (0, output_1.IsString)(),
    __metadata("design:type", String)
], Session.prototype, "languageCode", void 0);
exports.Session = Session;
//# sourceMappingURL=Session.js.map