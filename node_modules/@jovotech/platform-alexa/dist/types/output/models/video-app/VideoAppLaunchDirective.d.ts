import { Directive } from '../Directive';
import { VideoItem } from './VideoItem';
export declare class VideoAppLaunchDirective extends Directive<'VideoApp.Launch'> {
    type: 'VideoApp.Launch';
    videoItem: VideoItem;
}
