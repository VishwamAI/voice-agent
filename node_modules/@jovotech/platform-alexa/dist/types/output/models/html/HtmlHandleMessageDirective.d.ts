import { Directive } from '../Directive';
import { HtmlTransformers } from './HtmlTransformers';
export declare class HtmlHandleMessageDirective extends Directive<'Alexa.Presentation.HTML.HandleMessage'> {
    type: 'Alexa.Presentation.HTML.HandleMessage';
    message?: Record<string, unknown>;
    transformer?: HtmlTransformers;
}
