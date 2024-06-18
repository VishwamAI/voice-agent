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
exports.Prompt = exports.Content = exports.Simple = exports.Canvas = void 0;
const output_1 = require("@jovotech/output");
const constants_1 = require("../constants");
const IsValidContentObject_1 = require("../decorators/validation/IsValidContentObject");
const Image_1 = require("./common/Image");
const Link_1 = require("./common/Link");
const Suggestion_1 = require("./common/Suggestion");
const Card_1 = require("./content/Card");
const Collection_1 = require("./content/Collection");
const List_1 = require("./content/List");
const Media_1 = require("./content/Media");
const Table_1 = require("./content/Table");
class Canvas {
}
__decorate([
    (0, output_1.IsUrl)({ protocols: ['https', 'http'] }),
    __metadata("design:type", String)
], Canvas.prototype, "url", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    __metadata("design:type", Array)
], Canvas.prototype, "data", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Canvas.prototype, "suppressMic", void 0);
exports.Canvas = Canvas;
class Simple {
    toMessage() {
        const message = {};
        if (this.text) {
            message.text = this.text;
        }
        if (this.speech) {
            message.speech = this.speech;
        }
        return message;
    }
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Simple.prototype, "speech", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsString)(),
    (0, output_1.IsNotEmpty)(),
    (0, output_1.MaxLength)(constants_1.TEXT_MAX_LENGTH),
    __metadata("design:type", String)
], Simple.prototype, "text", void 0);
exports.Simple = Simple;
class Content {
}
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => Card_1.Card),
    __metadata("design:type", Card_1.Card)
], Content.prototype, "card", void 0);
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => Image_1.Image),
    __metadata("design:type", Image_1.Image)
], Content.prototype, "image", void 0);
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => Table_1.Table),
    __metadata("design:type", Table_1.Table)
], Content.prototype, "table", void 0);
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => Media_1.Media),
    __metadata("design:type", Media_1.Media)
], Content.prototype, "media", void 0);
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => Collection_1.Collection),
    __metadata("design:type", Collection_1.Collection)
], Content.prototype, "collection", void 0);
__decorate([
    (0, IsValidContentObject_1.IsValidContentObject)(),
    (0, output_1.Type)(() => List_1.List),
    __metadata("design:type", List_1.List)
], Content.prototype, "list", void 0);
exports.Content = Content;
class Prompt {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Prompt.prototype, "override", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Simple),
    __metadata("design:type", Simple)
], Prompt.prototype, "firstSimple", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Content),
    __metadata("design:type", Content)
], Prompt.prototype, "content", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Simple),
    __metadata("design:type", Simple)
], Prompt.prototype, "lastSimple", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsArray)(),
    (0, output_1.ArrayMaxSize)(constants_1.SUGGESTIONS_MAX_SIZE),
    (0, output_1.ValidateNested)({ each: true }),
    (0, output_1.Type)(() => Suggestion_1.Suggestion),
    __metadata("design:type", Array)
], Prompt.prototype, "suggestions", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Link_1.Link),
    __metadata("design:type", Link_1.Link)
], Prompt.prototype, "link", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Canvas),
    __metadata("design:type", Canvas)
], Prompt.prototype, "canvas", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], Prompt.prototype, "orderUpdate", void 0);
exports.Prompt = Prompt;
//# sourceMappingURL=Prompt.js.map