"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressiveResponseOutput = void 0;
const framework_1 = require("@jovotech/framework");
let ProgressiveResponseOutput = class ProgressiveResponseOutput extends framework_1.BaseOutput {
    /*
      |--------------------------------------------------------------------------
      | Output Template
      |--------------------------------------------------------------------------
      |
      | This structured output is later turned into a native response
      | Learn more here: www.jovo.tech/docs/output
      |
      */
    async build() {
        if (this.jovo.$alexa && this.jovo.$alexa.$request.request) {
            await this.progressiveResponse(this.options.speech, this.jovo.$alexa.$request.request.requestId, this.jovo.$alexa.$request.getApiEndpoint(), this.jovo.$alexa.$request.getApiAccessToken());
        }
        return {};
    }
    async progressiveResponse(speech, requestId, apiEndPoint, apiAccessToken) {
        const data = {
            header: {
                requestId,
            },
            directive: {
                type: 'VoicePlayer.Speak',
                speech: speech,
            },
        };
        const url = `${apiEndPoint}/v1/directives`;
        await framework_1.axios.request({
            data,
            url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiAccessToken}`,
            },
        });
    }
};
ProgressiveResponseOutput = __decorate([
    (0, framework_1.Output)()
], ProgressiveResponseOutput);
exports.ProgressiveResponseOutput = ProgressiveResponseOutput;
//# sourceMappingURL=ProgressiveResponseOutput.js.map