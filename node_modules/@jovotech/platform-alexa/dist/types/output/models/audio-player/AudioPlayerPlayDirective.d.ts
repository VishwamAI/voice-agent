import { PlayBehaviorLike } from '../common/OutputSpeech';
import { Directive } from '../Directive';
import { AudioItem } from './AudioItem';
export declare class AudioPlayerPlayDirective extends Directive<'AudioPlayer.Play'> {
    type: 'AudioPlayer.Play';
    playBehavior: PlayBehaviorLike;
    audioItem: AudioItem;
}
