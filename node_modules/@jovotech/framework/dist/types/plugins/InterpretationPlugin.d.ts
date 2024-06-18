import { AsrData, InputTypeLike, NluData } from '@jovotech/common';
import { ParsedAudioInput } from '../audio/ParsedAudioInput';
import { Extensible } from '../Extensible';
import { Jovo } from '../Jovo';
import { Plugin, PluginConfig } from '../Plugin';
export interface InterpretationPluginInputConfig {
    supportedTypes: InputTypeLike[];
}
export interface InterpretationPluginConfig extends PluginConfig {
    input: InterpretationPluginInputConfig;
}
export declare abstract class InterpretationPlugin<CONFIG extends InterpretationPluginConfig = InterpretationPluginConfig> extends Plugin<CONFIG> {
    abstract readonly targetSampleRate?: number;
    abstract processAudio?(jovo: Jovo, audio: ParsedAudioInput): Promise<AsrData | undefined>;
    abstract processText?(jovo: Jovo, text: string): Promise<NluData | undefined>;
    supportsIntentScoping?(): boolean;
    mount(parent: Extensible): Promise<void> | void;
    protected isInputTypeSupported(inputType: InputTypeLike): boolean;
    protected asr(jovo: Jovo): Promise<void>;
    protected nlu(jovo: Jovo): Promise<void>;
    /**
     * Extract the intents from the listen objects in all $output templates and store them for the next request
     * @see https://www.jovo.tech/docs/nlu#intent-scoping
     * @param jovo - Jovo instance
     */
    protected storeListenIntents(jovo: Jovo): void;
}
