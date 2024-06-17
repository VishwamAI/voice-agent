import { AplIndexListDirective } from './AplIndexListDirective';
export declare class AplSendIndexListDataDirective extends AplIndexListDirective<'Alexa.Presentation.APL.SendIndexListData'> {
    type: 'Alexa.Presentation.APL.SendIndexListData';
    correlationToken?: string;
    listVersion?: number;
    minimumInclusiveIndex?: string;
    maximumExclusiveIndex?: string;
    items?: Record<string, unknown>[];
}
