import { JovoComponentInfo } from './index';
import { Jovo } from './Jovo';
export declare class JovoProxy extends Jovo {
    jovo: Jovo;
    constructor(jovo: Jovo);
    private overwritePropertiesToPropagateChangesToJovo;
    get $component(): JovoComponentInfo;
    toJSON(): JovoProxy;
}
