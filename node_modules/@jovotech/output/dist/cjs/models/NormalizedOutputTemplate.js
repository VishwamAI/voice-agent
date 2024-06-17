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
exports.NormalizedOutputTemplate = void 0;
const __1 = require("..");
const NormalizedOutputTemplatePlatforms_1 = require("./NormalizedOutputTemplatePlatforms");
const OutputTemplateBase_1 = require("./OutputTemplateBase");
class NormalizedOutputTemplate extends OutputTemplateBase_1.OutputTemplateBase {
    static getKeys() {
        return ['message', 'reprompt', 'listen', 'quickReplies', 'card', 'carousel', 'platforms'];
    }
}
__decorate([
    (0, __1.IsOptional)(),
    (0, __1.IsInstance)(NormalizedOutputTemplatePlatforms_1.NormalizedOutputTemplatePlatforms),
    (0, __1.ValidateNested)(),
    (0, __1.ValidateNested)({ each: true }),
    (0, __1.Type)(() => NormalizedOutputTemplatePlatforms_1.NormalizedOutputTemplatePlatforms),
    __metadata("design:type", NormalizedOutputTemplatePlatforms_1.NormalizedOutputTemplatePlatforms)
], NormalizedOutputTemplate.prototype, "platforms", void 0);
exports.NormalizedOutputTemplate = NormalizedOutputTemplate;
//# sourceMappingURL=NormalizedOutputTemplate.js.map