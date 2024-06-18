import { App } from './App';
import { BaseComponent, ComponentConfig, ComponentConstructor } from './BaseComponent';
import { Plugin, PluginConfig } from './Plugin';
export interface ComponentPluginConfig<COMPONENT extends BaseComponent = BaseComponent> extends PluginConfig {
    component?: ComponentConfig<COMPONENT>;
}
export declare abstract class ComponentPlugin<COMPONENT extends BaseComponent = BaseComponent, CONFIG extends ComponentPluginConfig<COMPONENT> = ComponentPluginConfig<COMPONENT>> extends Plugin<CONFIG> {
    abstract readonly component: ComponentConstructor<COMPONENT>;
    install(app: App): void;
    mount(): void | Promise<void>;
}
