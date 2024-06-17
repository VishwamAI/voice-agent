import { AnyObject, Constructor } from '@jovotech/common';
import { ClassDecoratorMetadata } from './ClassDecoratorMetadata';
export declare abstract class MethodDecoratorMetadata<TARGET = AnyObject, KEY extends keyof TARGET = keyof TARGET> extends ClassDecoratorMetadata<TARGET> {
    readonly target: Constructor<TARGET> | Function;
    readonly propertyKey: KEY;
    protected constructor(target: Constructor<TARGET> | Function, propertyKey: KEY);
    hasSameTargetAs(otherMetadata: MethodDecoratorMetadata): boolean;
}
