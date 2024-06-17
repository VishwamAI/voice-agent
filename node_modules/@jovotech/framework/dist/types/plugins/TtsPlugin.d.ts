import { Extensible } from '../Extensible';
import { Jovo } from '../Jovo';
import { Plugin, PluginConfig } from '../Plugin';
import { TtsCachePlugin } from './TtsCachePlugin';
import { TtsData } from './TtsData';
export declare enum TtsTextType {
    Text = "text",
    Ssml = "ssml"
}
export interface TtsPluginConfig extends PluginConfig {
    cache?: TtsCachePlugin;
    fallbackLocale: string;
    outputFormat: string;
}
export declare abstract class TtsPlugin<CONFIG extends TtsPluginConfig = TtsPluginConfig> extends Plugin<CONFIG> {
    abstract supportedSsmlTags: string[];
    abstract processTts(jovo: Jovo, text: string, textType: TtsTextType): Promise<TtsData | undefined>;
    abstract getKeyPrefix?(jovo: Jovo): string | undefined;
    mount(parent: Extensible): Promise<void> | void;
    protected tts(jovo: Jovo): Promise<void>;
    private processTextList;
    private processTextItem;
    private buildAudioTag;
    protected buildKey(text: string, prefix?: string): string;
    protected getLocale(jovo: Jovo): string;
}
