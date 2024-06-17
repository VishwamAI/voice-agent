"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogDelegateRequestOutput = void 0;
const framework_1 = require("@jovotech/framework");
let DialogDelegateRequestOutput = class DialogDelegateRequestOutput extends framework_1.BaseOutput {
    build() {
        var _a, _b;
        const getSlotsFromEntities = () => {
            return Object.entries(this.$entities).reduce((slots, [entityKey, entity]) => {
                slots[entityKey] = {
                    name: entityKey,
                    value: entity.value,
                };
                return slots;
            }, {});
        };
        // If dialog is delegated back to Jovo and slots are omitted, set them automatically
        if (this.options.target === 'skill' &&
            ((_a = this.options.updatedRequest) === null || _a === void 0 ? void 0 : _a.intent) &&
            !this.options.updatedRequest.intent.slots) {
            this.options.updatedRequest.intent.slots = getSlotsFromEntities();
        }
        if (this.options.target === 'AMAZON.Conversations' &&
            ((_b = this.options.updatedRequest) === null || _b === void 0 ? void 0 : _b.input) &&
            !this.options.updatedRequest.input.slots) {
            this.options.updatedRequest.input.slots = getSlotsFromEntities();
        }
        return {
            platforms: {
                alexa: {
                    nativeResponse: {
                        response: {
                            directives: [
                                {
                                    type: 'Dialog.DelegateRequest',
                                    target: this.options.target,
                                    period: {
                                        until: 'EXPLICIT_RETURN',
                                    },
                                    updatedRequest: this.options.updatedRequest,
                                },
                            ],
                        },
                    },
                },
            },
        };
    }
};
DialogDelegateRequestOutput = __decorate([
    (0, framework_1.Output)()
], DialogDelegateRequestOutput);
exports.DialogDelegateRequestOutput = DialogDelegateRequestOutput;
//# sourceMappingURL=DialogDelegateRequestOutput.js.map