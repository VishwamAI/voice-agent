import { InterpretationPlugin, InterpretationPluginConfig } from './InterpretationPlugin';
export declare abstract class SluPlugin<CONFIG extends InterpretationPluginConfig = InterpretationPluginConfig> extends InterpretationPlugin<CONFIG> {
    getDefaultConfig(): CONFIG;
}
