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
exports.Response = void 0;
const output_1 = require("@jovotech/output");
const IsValidDirectivesArray_1 = require("../decorators/validation/IsValidDirectivesArray");
const AplExecuteCommandsDirective_1 = require("./apl/AplExecuteCommandsDirective");
const AplLoadIndexListDataDirective_1 = require("./apl/AplLoadIndexListDataDirective");
const AplRenderDocumentDirective_1 = require("./apl/AplRenderDocumentDirective");
const AplSendIndexListDataDirective_1 = require("./apl/AplSendIndexListDataDirective");
const AplUpdateIndexListDirective_1 = require("./apl/AplUpdateIndexListDirective");
const AplaRenderDocumentDirective_1 = require("./apla/AplaRenderDocumentDirective");
const ApltExecuteCommandsDirective_1 = require("./aplt/ApltExecuteCommandsDirective");
const ApltRenderDocumentDirective_1 = require("./aplt/ApltRenderDocumentDirective");
const AudioPlayerClearQueueDirective_1 = require("./audio-player/AudioPlayerClearQueueDirective");
const AudioPlayerPlayDirective_1 = require("./audio-player/AudioPlayerPlayDirective");
const AudioPlayerStopDirective_1 = require("./audio-player/AudioPlayerStopDirective");
const Card_1 = require("./card/Card");
const OutputSpeech_1 = require("./common/OutputSpeech");
const DialogConfirmIntentDirective_1 = require("./dialog/DialogConfirmIntentDirective");
const DialogConfirmSlotDirective_1 = require("./dialog/DialogConfirmSlotDirective");
const DialogDelegateDirective_1 = require("./dialog/DialogDelegateDirective");
const DialogElicitSlotDirective_1 = require("./dialog/DialogElicitSlotDirective");
const DialogUpdateDynamicEntitiesDirective_1 = require("./dialog/DialogUpdateDynamicEntitiesDirective");
const Directive_1 = require("./Directive");
const DisplayRenderTemplateDirective_1 = require("./display/DisplayRenderTemplateDirective");
const HintDirective_1 = require("./display/HintDirective");
const HtmlHandleMessageDirective_1 = require("./html/HtmlHandleMessageDirective");
const HtmlStartDirective_1 = require("./html/HtmlStartDirective");
const Reprompt_1 = require("./Reprompt");
const VideoAppLaunchDirective_1 = require("./video-app/VideoAppLaunchDirective");
class Response {
}
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => OutputSpeech_1.OutputSpeech),
    __metadata("design:type", OutputSpeech_1.OutputSpeech)
], Response.prototype, "outputSpeech", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Card_1.Card),
    __metadata("design:type", Card_1.Card)
], Response.prototype, "card", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.ValidateNested)(),
    (0, output_1.Type)(() => Reprompt_1.Reprompt),
    __metadata("design:type", Reprompt_1.Reprompt)
], Response.prototype, "reprompt", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Response.prototype, "shouldEndSession", void 0);
__decorate([
    (0, output_1.IsOptional)(),
    (0, output_1.IsObject)(),
    __metadata("design:type", Object)
], Response.prototype, "apiResponse", void 0);
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
                { value: AplRenderDocumentDirective_1.AplRenderDocumentDirective, name: 'Alexa.Presentation.APL.RenderDocument' },
                { value: AplExecuteCommandsDirective_1.AplExecuteCommandsDirective, name: 'Alexa.Presentation.APL.ExecuteCommands' },
                { value: AplSendIndexListDataDirective_1.AplSendIndexListDataDirective, name: 'Alexa.Presentation.APL.SendIndexListData' },
                { value: AplUpdateIndexListDirective_1.AplUpdateIndexListDirective, name: 'Alexa.Presentation.APL.UpdateIndexListData' },
                { value: AplLoadIndexListDataDirective_1.AplLoadIndexListDataDirective, name: 'Alexa.Presentation.APL.LoadIndexListData' },
                { value: ApltRenderDocumentDirective_1.ApltRenderDocumentDirective, name: 'Alexa.Presentation.APLT.RenderDocument' },
                { value: ApltExecuteCommandsDirective_1.ApltExecuteCommandsDirective, name: 'Alexa.Presentation.APLT.ExecuteCommands' },
                { value: AplaRenderDocumentDirective_1.AplaRenderDocumentDirective, name: 'Alexa.Presentation.APLA.RenderDocument' },
                { value: AudioPlayerPlayDirective_1.AudioPlayerPlayDirective, name: 'AudioPlayer.Play' },
                { value: AudioPlayerStopDirective_1.AudioPlayerStopDirective, name: 'AudioPlayer.Stop' },
                { value: AudioPlayerClearQueueDirective_1.AudioPlayerClearQueueDirective, name: 'AudioPlayer.ClearQueue' },
                { value: DialogDelegateDirective_1.DialogDelegateDirective, name: 'Dialog.Delegate' },
                { value: DialogElicitSlotDirective_1.DialogElicitSlotDirective, name: 'Dialog.ElicitSlot' },
                { value: DialogConfirmSlotDirective_1.DialogConfirmSlotDirective, name: 'Dialog.ConfirmSlot' },
                { value: DialogConfirmIntentDirective_1.DialogConfirmIntentDirective, name: 'Dialog.ConfirmIntent' },
                { value: DialogUpdateDynamicEntitiesDirective_1.DialogUpdateDynamicEntitiesDirective, name: 'Dialog.UpdateDynamicEntities' },
                { value: DisplayRenderTemplateDirective_1.DisplayRenderTemplateDirective, name: 'Display.RenderTemplate' },
                { value: HintDirective_1.HintDirective, name: 'Hint' },
                { value: HtmlStartDirective_1.HtmlStartDirective, name: 'Alexa.Presentation.HTML.Start' },
                { value: HtmlHandleMessageDirective_1.HtmlHandleMessageDirective, name: 'Alexa.Presentation.HTML.HandleMessage' },
                { value: VideoAppLaunchDirective_1.VideoAppLaunchDirective, name: 'VideoApp.Launch' },
            ],
        },
    }),
    __metadata("design:type", Array)
], Response.prototype, "directives", void 0);
exports.Response = Response;
//# sourceMappingURL=Response.js.map