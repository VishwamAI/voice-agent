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
exports.TextMessage = exports.SpeechMessage = exports.Message = exports.IsValidMessageString = void 0;
const __1 = require("..");
const IsValidMessageString = () => (0, __1.IsSomeValid)({
    keys: ['speech', 'text'],
    validate: (value) => {
        if (!(0, __1.isString)(value)) {
            return '$property must be a string';
        }
        if (!value) {
            return '$property should not be empty';
        }
        return;
    },
});
exports.IsValidMessageString = IsValidMessageString;
class Message {
}
__decorate([
    (0, exports.IsValidMessageString)(),
    __metadata("design:type", String)
], Message.prototype, "speech", void 0);
__decorate([
    (0, exports.IsValidMessageString)(),
    __metadata("design:type", String)
], Message.prototype, "text", void 0);
exports.Message = Message;
class SpeechMessage extends Message {
}
exports.SpeechMessage = SpeechMessage;
class TextMessage extends Message {
}
exports.TextMessage = TextMessage;
//# sourceMappingURL=Message.js.map