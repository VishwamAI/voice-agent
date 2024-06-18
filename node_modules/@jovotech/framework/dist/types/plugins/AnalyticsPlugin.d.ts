import { Extensible } from '../Extensible';
import { Jovo } from '../Jovo';
import { Plugin, PluginConfig } from '../Plugin';
export interface AnalyticsPluginConfig extends PluginConfig {
}
export declare abstract class AnalyticsPlugin<CONFIG extends AnalyticsPluginConfig = AnalyticsPluginConfig> extends Plugin<CONFIG> {
    mount(parent: Extensible): Promise<void> | void;
    abstract trackRequest(jovo: Jovo): Promise<void>;
    abstract trackResponse(jovo: Jovo): Promise<void>;
}
