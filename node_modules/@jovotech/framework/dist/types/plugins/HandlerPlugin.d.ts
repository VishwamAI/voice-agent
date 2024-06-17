import { HandleRequest, PluginConfig } from '../index';
import { Plugin } from '../Plugin';
export interface HandlerPluginConfig extends PluginConfig {
}
declare module '../Extensible' {
    interface ExtensiblePluginConfig {
        HandlerPlugin?: HandlerPluginConfig;
    }
    interface ExtensiblePlugins {
        HandlerPlugin?: HandlerPlugin;
    }
}
export declare class HandlerPlugin extends Plugin<HandlerPluginConfig> {
    getDefaultConfig(): PluginConfig;
    mount(parent: HandleRequest): Promise<void> | void;
    private handle;
}
