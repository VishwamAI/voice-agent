import { AplIndexListDirective } from './AplIndexListDirective';
import { AplOperation } from './AplOperation';
export declare class AplUpdateIndexListDirective extends AplIndexListDirective<'Alexa.Presentation.APL.UpdateIndexListData'> {
    type: 'Alexa.Presentation.APL.UpdateIndexListData';
    listVersion: number;
    operations: AplOperation[];
}
