import { Directive } from '../Directive';
import { TextContentItem } from './TextContentItem';
export declare class HintDirective extends Directive<'Hint'> {
    type: 'Hint';
    hint: TextContentItem;
}
