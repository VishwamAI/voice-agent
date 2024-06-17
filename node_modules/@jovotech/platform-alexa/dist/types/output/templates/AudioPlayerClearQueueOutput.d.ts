import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { ClearBehaviorLike } from '../models';
export interface AudioPlayerClearQueueOutputOptions extends OutputOptions {
    clearBehavior?: ClearBehaviorLike;
}
export declare class AudioPlayerClearQueueOutput extends BaseOutput<AudioPlayerClearQueueOutputOptions> {
    getDefaultOptions(): AudioPlayerClearQueueOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
