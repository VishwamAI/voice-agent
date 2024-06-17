"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlexaAudioPlayer = void 0;
class AlexaAudioPlayer {
    constructor(alexa) {
        this.alexa = alexa;
    }
    get offsetInMilliseconds() {
        var _a, _b;
        return (_b = (_a = this.alexa.$request.context) === null || _a === void 0 ? void 0 : _a.AudioPlayer) === null || _b === void 0 ? void 0 : _b.offsetInMilliseconds;
    }
    get playerActivity() {
        var _a, _b;
        return (_b = (_a = this.alexa.$request.context) === null || _a === void 0 ? void 0 : _a.AudioPlayer) === null || _b === void 0 ? void 0 : _b.playerActivity;
    }
    get token() {
        var _a, _b;
        return (_b = (_a = this.alexa.$request.context) === null || _a === void 0 ? void 0 : _a.AudioPlayer) === null || _b === void 0 ? void 0 : _b.token;
    }
    get error() {
        var _a;
        return (_a = this.alexa.$request.request) === null || _a === void 0 ? void 0 : _a.error;
    }
    toJSON() {
        return Object.assign(Object.assign({}, this), { alexa: undefined });
    }
}
exports.AlexaAudioPlayer = AlexaAudioPlayer;
//# sourceMappingURL=AlexaAudioPlayer.js.map