"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewHook = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const AlexaModel_json_1 = __importDefault(require("../boilerplate/AlexaModel.json"));
const AlexaHook_1 = require("./AlexaHook");
class NewHook extends AlexaHook_1.AlexaHook {
    install() {
        this.middlewareCollection = {
            new: [this.addSystemIntents.bind(this)],
        };
    }
    addSystemIntents() {
        const modelsPath = (0, path_1.join)(this.$cli.projectPath, this.$context.projectName, 'models');
        const modelFiles = (0, fs_1.readdirSync)(modelsPath);
        for (const modelFile of modelFiles) {
            const modelPath = (0, path_1.join)(modelsPath, modelFile);
            const rawModelData = (0, fs_1.readFileSync)(modelPath, 'utf-8');
            const model = JSON.parse(rawModelData);
            const updatedModel = Object.assign(Object.assign({}, model), AlexaModel_json_1.default);
            (0, fs_1.writeFileSync)(modelPath, JSON.stringify(updatedModel, null, 2));
        }
    }
}
exports.NewHook = NewHook;
//# sourceMappingURL=NewHook.js.map