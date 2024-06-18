import { AnyObject, Constructor } from '@jovotech/common';
export declare abstract class ClassDecoratorMetadata<TARGET = AnyObject> {
    readonly target: Constructor<TARGET> | Function;
    protected constructor(target: Constructor<TARGET> | Function);
    hasSameTargetAs(otherMetadata: ClassDecoratorMetadata): boolean;
}
