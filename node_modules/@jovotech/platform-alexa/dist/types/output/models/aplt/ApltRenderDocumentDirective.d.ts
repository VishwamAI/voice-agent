import { AplDataSource } from '../apl/AplDataSource';
import { AplDirective } from '../apl/AplDirective';
import { ApltDocument } from './ApltDocument';
export declare class ApltRenderDocumentDirective extends AplDirective<'Alexa.Presentation.APLT.RenderDocument'> {
    type: 'Alexa.Presentation.APLT.RenderDocument';
    targetProfile?: 'FOUR_CHARACTER_CLOCK';
    document: ApltDocument;
    datasources?: Record<string, AplDataSource>;
}
