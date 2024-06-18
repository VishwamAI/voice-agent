import { InterpretationPlugin, InterpretationPluginConfig } from './InterpretationPlugin';
export declare abstract class AsrPlugin<CONFIG extends InterpretationPluginConfig = InterpretationPluginConfig> extends InterpretationPlugin<CONFIG> {
    processText: undefined;
    getDefaultConfig(): CONFIG;
}
