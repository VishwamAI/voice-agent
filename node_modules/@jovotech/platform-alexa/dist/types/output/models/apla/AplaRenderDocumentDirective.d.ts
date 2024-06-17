import { AnyObject } from '@jovotech/framework';
import { AplDirective } from '../apl/AplDirective';
import { AplaDataSource } from './AplaDataSource';
export declare class AplaRenderDocumentDirective extends AplDirective<'Alexa.Presentation.APLA.RenderDocument'> {
    type: 'Alexa.Presentation.APLA.RenderDocument';
    document: (AnyObject & {
        type: 'APLA' | string;
    }) | {
        type: 'Link';
        src: string;
    };
    datasources?: Record<string, AplaDataSource>;
}
