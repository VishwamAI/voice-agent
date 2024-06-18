"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JovoDevice = exports.Capability = void 0;
var Capability;
(function (Capability) {
    Capability["Screen"] = "SCREEN";
    Capability["Audio"] = "AUDIO";
    Capability["LongformAudio"] = "LONGFORM_AUDIO";
    Capability["Video"] = "VIDEO";
})(Capability = exports.Capability || (exports.Capability = {}));
class JovoDevice {
    constructor(jovo) {
        this.jovo = jovo;
        this.capabilities = jovo.$request.getDeviceCapabilities() || [];
    }
    supports(capability) {
        return this.capabilities.includes(capability);
    }
    toJSON() {
        return Object.assign(Object.assign({}, this), { jovo: undefined });
    }
}
exports.JovoDevice = JovoDevice;
//# sourceMappingURL=JovoDevice.js.map