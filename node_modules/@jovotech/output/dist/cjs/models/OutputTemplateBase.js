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
exports.OutputTemplateBase = void 0;
const class_transformer_1 = require("class-transformer");
const __1 = require("..");
const TransformMessage_1 = require("../decorators/transformation/TransformMessage");
const IsStringOrInstance_1 = require("../decorators/validation/IsStringOrInstance");
const Card_1 = require("./Card");
const Carousel_1 = require("./Carousel");
const Listen_1 = require("./Listen");
const Message_1 = require("./Message");
const QuickReply_1 = require("./QuickReply");
class OutputTemplateBase {
}
__decorate([
    (0, __1.IsOptional)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(Message_1.Message),
    (0, TransformMessage_1.TransformMessage)(),
    __metadata("design:type", Object)
], OutputTemplateBase.prototype, "message", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(Message_1.Message),
    (0, class_transformer_1.Type)(() => Message_1.Message),
    __metadata("design:type", Object)
], OutputTemplateBase.prototype, "reprompt", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsBooleanOrInstance)(Listen_1.Listen),
    (0, class_transformer_1.Type)(() => Listen_1.Listen),
    __metadata("design:type", Object)
], OutputTemplateBase.prototype, "listen", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsArray)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(QuickReply_1.QuickReply, {
        each: true,
    }),
    (0, class_transformer_1.Type)(() => QuickReply_1.QuickReply),
    __metadata("design:type", Array)
], OutputTemplateBase.prototype, "quickReplies", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsInstance)(Card_1.Card),
    (0, __1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Card_1.Card),
    __metadata("design:type", Card_1.Card)
], OutputTemplateBase.prototype, "card", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsInstance)(Carousel_1.Carousel),
    (0, __1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Carousel_1.Carousel),
    __metadata("design:type", Carousel_1.Carousel)
], OutputTemplateBase.prototype, "carousel", void 0);
exports.OutputTemplateBase = OutputTemplateBase;
//# sourceMappingURL=OutputTemplateBase.js.map