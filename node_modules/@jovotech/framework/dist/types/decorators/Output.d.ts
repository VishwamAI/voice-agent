import { BaseOutput, OutputConstructor } from '../BaseOutput';
export declare function Output<OUTPUT extends BaseOutput = BaseOutput>(name?: string): (target: OutputConstructor<OUTPUT>) => void;
