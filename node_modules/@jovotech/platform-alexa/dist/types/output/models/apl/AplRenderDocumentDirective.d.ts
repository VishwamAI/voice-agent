import { AnyObject } from '@jovotech/framework';
import { AplDataSource } from './AplDataSource';
import { AplDirective } from './AplDirective';
export declare class AplRenderDocumentDirective extends AplDirective<'Alexa.Presentation.APL.RenderDocument'> {
    type: 'Alexa.Presentation.APL.RenderDocument';
    document: (AnyObject & {
        type: 'APL' | string;
    }) | {
        type: 'Link';
        src: string;
    };
    sources?: AnyObject;
    datasources?: Record<string, AplDataSource>;
}
