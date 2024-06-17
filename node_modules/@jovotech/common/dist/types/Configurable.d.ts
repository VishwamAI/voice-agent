import { AnyObject, DeepPartial } from '.';
export declare abstract class Configurable<CONFIG extends AnyObject = AnyObject> {
    config: CONFIG;
    readonly initConfig?: DeepPartial<CONFIG>;
    constructor(config?: DeepPartial<CONFIG>);
    mergeConfig(config?: DeepPartial<CONFIG>): void;
    get name(): string;
    abstract getDefaultConfig(): CONFIG;
    getInitConfig?(): DeepPartial<CONFIG> | Promise<DeepPartial<CONFIG>>;
}
