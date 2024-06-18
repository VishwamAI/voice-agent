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
exports.NormalizedPlatformOutputTemplate = void 0;
const __1 = require("..");
const TransformMessage_1 = require("../decorators/transformation/TransformMessage");
const IsBooleanOrInstance_1 = require("../decorators/validation/IsBooleanOrInstance");
const IsStringOrInstance_1 = require("../decorators/validation/IsStringOrInstance");
const Listen_1 = require("./Listen");
const Card_1 = require("./Card");
const Carousel_1 = require("./Carousel");
const Message_1 = require("./Message");
const QuickReply_1 = require("./QuickReply");
class NormalizedPlatformOutputTemplate {
}
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.ValidateNested)(),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "nativeResponse", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(Message_1.Message),
    (0, TransformMessage_1.TransformMessage)(),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "message", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(Message_1.Message),
    (0, __1.Type)(() => Message_1.Message),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "reprompt", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, IsBooleanOrInstance_1.IsBooleanOrInstance)(Listen_1.Listen),
    (0, __1.Type)(() => Listen_1.Listen),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "listen", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsArray)(),
    (0, IsStringOrInstance_1.IsStringOrInstance)(QuickReply_1.QuickReply, {
        each: true,
    }),
    (0, __1.Type)(() => QuickReply_1.QuickReply),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "quickReplies", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsInstance)(Card_1.Card),
    (0, __1.ValidateNested)(),
    (0, __1.Type)(() => Card_1.Card),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "card", void 0);
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsInstance)(Carousel_1.Carousel),
    (0, __1.ValidateNested)(),
    (0, __1.Type)(() => Carousel_1.Carousel),
    __metadata("design:type", Object)
], NormalizedPlatformOutputTemplate.prototype, "carousel", void 0);
exports.NormalizedPlatformOutputTemplate = NormalizedPlatformOutputTemplate;
//# sourceMappingURL=NormalizedPlatformOutputTemplate.js.map