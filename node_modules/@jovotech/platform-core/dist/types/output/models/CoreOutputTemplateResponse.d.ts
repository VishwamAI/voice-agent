import { NormalizedOutputTemplate } from '@jovotech/output';
import { CoreResponse } from '../../CoreResponse';
import { CoreResponseContext } from './CoreResponseContext';
export declare class CoreOutputTemplateResponse implements Partial<CoreResponse> {
    [key: string]: unknown;
    version?: string;
    output?: NormalizedOutputTemplate[];
    repromptOutput?: NormalizedOutputTemplate[];
    context?: CoreResponseContext;
}
