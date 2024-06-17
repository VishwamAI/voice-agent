import { AplLayout } from '../apl/AplLayout';
import { AplResource } from '../apl/AplResource';
import { ApltDocumentSettings } from './ApltDocumentSettings';
export declare class ApltDocument {
    type: 'APLT';
    version: '1.0';
    description?: string;
    layouts?: Record<string, AplLayout>;
    resources?: AplResource[];
    mainTemplate: {
        item: Record<string, unknown>;
    } | {
        items: Record<string, unknown>[];
    };
    onMount?: Record<string, unknown>[];
    settings?: ApltDocumentSettings;
}
