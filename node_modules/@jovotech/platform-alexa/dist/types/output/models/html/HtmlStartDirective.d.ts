import { AnyObject } from '@jovotech/framework';
import { Directive } from '../Directive';
import { HtmlConfiguration } from './HtmlConfiguration';
import { HtmlRequest } from './HtmlRequest';
import { HtmlTransformers } from './HtmlTransformers';
export declare class HtmlStartDirective extends Directive<'Alexa.Presentation.HTML.Start'> {
    type: 'Alexa.Presentation.HTML.Start';
    data?: AnyObject;
    request: HtmlRequest;
    configuration: HtmlConfiguration;
    transformer?: HtmlTransformers;
}
