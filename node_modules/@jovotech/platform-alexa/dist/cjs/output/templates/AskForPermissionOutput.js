"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskForPermissionOutput = void 0;
const framework_1 = require("@jovotech/framework");
let AskForPermissionOutput = class AskForPermissionOutput extends framework_1.BaseOutput {
    build() {
        return {
            message: this.options.message,
            platforms: {
                alexa: {
                    nativeResponse: {
                        response: {
                            shouldEndSession: true,
                            directives: [
                                {
                                    type: 'Connections.SendRequest',
                                    name: 'AskFor',
                                    payload: {
                                        '@type': 'AskForPermissionsConsentRequest',
                                        '@version': '1',
                                        'permissionScope': this.options.permissionScope,
                                    },
                                    token: this.options.token || '',
                                },
                            ],
                        },
                    },
                },
            },
        };
    }
};
AskForPermissionOutput = __decorate([
    (0, framework_1.Output)()
], AskForPermissionOutput);
exports.AskForPermissionOutput = AskForPermissionOutput;
//# sourceMappingURL=AskForPermissionOutput.js.map