import { BaseComponent, ComponentConstructor } from '../BaseComponent';
import { HandleOptions } from './HandlerMetadata';
import { MethodDecoratorMetadata } from './MethodDecoratorMetadata';
/**
 * Get values of the rest parameter of a decorator.
 * Useful for following case:
 * `@Intent(['foo', 'bar'])` in this case, the actual value in the intents-parameter is `[ ['foo', 'bar'] ]`, therefore we only need to return the inner array.
 */
export declare function getValuesOfDecoratorRestParameter<T>(restParameter: T[] | T[][]): T[];
export declare function createHandlerOptionDecorator<COMPONENT extends BaseComponent = BaseComponent, KEY extends keyof COMPONENT = keyof COMPONENT>(options: Partial<HandleOptions>): MethodDecorator;
export declare class HandlerOptionMetadata<COMPONENT extends BaseComponent = BaseComponent, KEY extends keyof COMPONENT = keyof COMPONENT> extends MethodDecoratorMetadata<COMPONENT, KEY> {
    readonly target: ComponentConstructor<COMPONENT> | Function;
    readonly propertyKey: KEY;
    readonly options: Partial<HandleOptions>;
    constructor(target: ComponentConstructor<COMPONENT> | Function, propertyKey: KEY, options?: Partial<HandleOptions>);
}
