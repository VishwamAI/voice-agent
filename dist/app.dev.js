"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_filedb_1 = require("@jovotech/db-filedb");
const plugin_debugger_1 = require("@jovotech/plugin-debugger");
/*
|--------------------------------------------------------------------------
| STAGE CONFIGURATION
|--------------------------------------------------------------------------
|
| This configuration gets merged into the default app config
| Learn more here: www.jovo.tech/docs/staging
|
*/
app_1.app.configure({
    plugins: [
        new db_filedb_1.FileDb({
            pathToFile: '../db/db.json',
        }),
        new plugin_debugger_1.JovoDebugger({
            webhookUrl: 'https://personal-voice-assistant-gxnnzccx.devinapps.com/webhook',
        }),
    ],
});
__exportStar(require("./server.express"), exports);
//# sourceMappingURL=app.dev.js.map