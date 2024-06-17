import { AsrData, AudioInput, EntityMap, Input, InputType, InputTypeLike, NluData } from '@jovotech/common';
export declare const DEFAULT_INPUT_TYPE = InputType.Intent;
export declare class JovoInput implements Input {
    type: InputTypeLike;
    asr?: AsrData;
    nlu?: NluData;
    intent?: NluData['intent'];
    entities?: EntityMap;
    text?: string;
    audio?: AudioInput;
    constructor(typeOrObject?: InputTypeLike | Input);
    getText(): string | undefined;
    getIntentName(): string | undefined;
}
