import { App } from '../App';
import { HandleRequest } from '../HandleRequest';
import { Plugin, PluginConfig } from '../Plugin';
import { RouteMatch } from './RouteMatch';
export interface RouterPluginConfig extends PluginConfig {
}
declare module '../Extensible' {
    interface ExtensiblePluginConfig {
        RouterPlugin?: RouterPluginConfig;
    }
    interface ExtensiblePlugins {
        RouterPlugin?: RouterPlugin;
    }
}
export interface JovoRoute {
    readonly resolved: RouteMatch;
    readonly matches: ReadonlyArray<RouteMatch>;
}
export declare class RouterPlugin extends Plugin<RouterPluginConfig> {
    getDefaultConfig(): PluginConfig;
    initialize(parent: App): Promise<void> | void;
    mount(parent: HandleRequest): Promise<void> | void;
    private setRoute;
    private getMappedIntent;
    private checkForDuplicateGlobalHandlers;
}
