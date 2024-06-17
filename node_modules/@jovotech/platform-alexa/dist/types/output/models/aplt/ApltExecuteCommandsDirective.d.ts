import { AplDirective } from '../apl/AplDirective';
export declare class ApltExecuteCommandsDirective extends AplDirective<'Alexa.Presentation.APLT.ExecuteCommands'> {
    type: 'Alexa.Presentation.APLT.ExecuteCommands';
    commands: Record<string, unknown>[];
}
