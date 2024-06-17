import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { AudioItem, PlayBehaviorLike } from '../models';
export interface AudioPlayerPlayOutputOptions extends OutputOptions {
    playBehavior?: PlayBehaviorLike;
    audioItem: AudioItem;
}
export declare class AudioPlayerPlayOutput extends BaseOutput<AudioPlayerPlayOutputOptions> {
    getDefaultOptions(): AudioPlayerPlayOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
    static getTokenFromUrl(url: string): string;
}
