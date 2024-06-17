import { JovoResponse, OutputTemplate } from '@jovotech/output';
import { BaseOutput, OutputConstructor } from './BaseOutput';
import { DeepPartial } from './index';
import { Jovo } from './Jovo';
import { JovoDevice } from './JovoDevice';
import { JovoRequest } from './JovoRequest';
import { JovoUser } from './JovoUser';
import { Platform } from './Platform';
export declare abstract class AsyncJovo<REQUEST extends JovoRequest = JovoRequest, RESPONSE extends JovoResponse = JovoResponse, JOVO extends Jovo<REQUEST, RESPONSE, JOVO, USER, DEVICE, PLATFORM> = any, USER extends JovoUser<JOVO> = JovoUser<JOVO>, DEVICE extends JovoDevice<JOVO> = JovoDevice<JOVO>, PLATFORM extends Platform<REQUEST, RESPONSE, JOVO, USER, DEVICE, PLATFORM> = any> extends Jovo<REQUEST, RESPONSE, JOVO, USER, DEVICE, PLATFORM> {
    $send(outputTemplateOrMessage: OutputTemplate | OutputTemplate[] | string): Promise<void>;
    $send<OUTPUT extends BaseOutput>(outputConstructor: OutputConstructor<OUTPUT, REQUEST, RESPONSE, this>, options?: DeepPartial<OUTPUT['options']>): Promise<void>;
    protected abstract sendResponse(response: RESPONSE): Promise<any>;
}
