import { HandleRequest } from '../HandleRequest';
import { Plugin, PluginConfig } from '../Plugin';
export interface OutputPluginConfig extends PluginConfig {
}
declare module '../Extensible' {
    interface ExtensiblePluginConfig {
        OutputPlugin?: OutputPluginConfig;
    }
    interface ExtensiblePlugins {
        OutputPlugin?: OutputPlugin;
    }
}
export declare class OutputPlugin extends Plugin<OutputPluginConfig> {
    getDefaultConfig(): PluginConfig;
    mount(parent: HandleRequest): Promise<void> | void;
    private handle;
}
