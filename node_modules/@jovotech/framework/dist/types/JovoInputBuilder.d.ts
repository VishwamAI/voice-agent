import { Input, InputTypeLike } from '@jovotech/common';
import { JovoInput } from './JovoInput';
export declare class JovoInputBuilder {
    private readonly input;
    constructor(inputTypeOrObject?: InputTypeLike | Input);
    set<KEY extends keyof JovoInput>(key: KEY, value: JovoInput[KEY]): this;
    build(): JovoInput;
}
