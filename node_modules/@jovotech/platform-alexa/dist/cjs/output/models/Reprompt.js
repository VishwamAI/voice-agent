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
exports.Reprompt = void 0;
const output_1 = require("@jovotech/output");
const IsValidDirectivesArray_1 = require("../decorators/validation/IsValidDirectivesArray");
const AplaRenderDocumentDirective_1 = require("./apla/AplaRenderDocumentDirective");
const OutputSpeech_1 = require("./common/OutputSpeech");
const Directive_1 = require("./Directive");
class Reprompt {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => OutputSpeech_1.OutputSpeech),
    __metadata("design:type", OutputSpeech_1.OutputSpeech)
], Reprompt.prototype, "outputSpeech", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, IsValidDirectivesArray_1.IsValidDirectivesArray)(),
    (0, output_1.ValidateNested)({
        each: true,
    }),
    (0, output_1.Type)(() => Directive_1.Directive, {
        keepDiscriminatorProperty: true,
        discriminator: {
            property: 'type',
            subTypes: [
                { value: AplaRenderDocumentDirective_1.AplaRenderDocumentDirective, name: 'Alexa.Presentation.APLA.RenderDocument' },
            ],
        },
    }),
    __metadata("design:type", Array)
], Reprompt.prototype, "directives", void 0);
exports.Reprompt = Reprompt;
//# sourceMappingURL=Reprompt.js.map