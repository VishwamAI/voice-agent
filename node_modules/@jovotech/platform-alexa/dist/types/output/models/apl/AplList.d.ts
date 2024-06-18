import { CarouselItem } from '@jovotech/output';
import { AplHeader } from './AplHeader';
import { AplRenderDocumentDirective } from './AplRenderDocumentDirective';
export declare class AplList {
    title?: string;
    backgroundImageUrl?: string;
    header?: AplHeader;
    items: CarouselItem[];
    toApl?(): AplRenderDocumentDirective;
}
