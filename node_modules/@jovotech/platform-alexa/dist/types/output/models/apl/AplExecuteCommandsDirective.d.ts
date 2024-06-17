import { AplDirective } from './AplDirective';
export declare class AplExecuteCommandsDirective extends AplDirective<'Alexa.Presentation.APL.ExecuteCommands'> {
    type: 'Alexa.Presentation.APL.ExecuteCommands';
    commands: Record<string, unknown>[];
}
