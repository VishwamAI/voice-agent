/// <reference types="node" />
import { AudioInput } from '@jovotech/common';
export declare class ParsedAudioInput {
    samples: Float32Array;
    sampleRate: number;
    static fromAudioInput(audio: AudioInput): ParsedAudioInput;
    constructor(samples: Float32Array, sampleRate: number);
    sampleDown(targetSampleRate: number): this;
    toWav(targetSampleRate?: number): Buffer;
}
