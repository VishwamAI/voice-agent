import { BaseOutput, OutputConstructor } from '../BaseOutput';
import { ClassDecoratorMetadata } from './ClassDecoratorMetadata';
export declare class OutputMetadata<OUTPUT extends BaseOutput = BaseOutput> extends ClassDecoratorMetadata {
    readonly target: OutputConstructor<OUTPUT> | Function;
    readonly name: string;
    constructor(target: OutputConstructor<OUTPUT> | Function, name: string);
}
