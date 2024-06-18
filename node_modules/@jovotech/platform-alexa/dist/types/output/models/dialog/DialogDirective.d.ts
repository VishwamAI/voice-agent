import { Intent } from '../common/Intent';
import { Directive } from '../Directive';
export declare class DialogDirective<TYPE extends string = string> extends Directive<TYPE> {
    updatedIntent?: Intent;
}
