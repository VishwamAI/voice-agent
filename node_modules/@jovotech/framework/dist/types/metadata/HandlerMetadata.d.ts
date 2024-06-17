import { InputTypeLike, Intent, UnknownObject } from '@jovotech/common';
import { BaseComponent, ComponentConstructor } from '../BaseComponent';
import { RegisteredPlatformName } from '../decorators/Platforms';
import { JovoConditionFunction } from '../interfaces';
import { HandlerOptionMetadata } from './HandlerOptionMetadata';
import { MethodDecoratorMetadata } from './MethodDecoratorMetadata';
export interface ConditionsOptions {
    if?: JovoConditionFunction;
    platforms?: Array<string | RegisteredPlatformName>;
}
export interface RoutesOptions {
    global?: boolean;
    subState?: string;
    intents?: Array<string | Intent>;
    touch?: Array<string | Intent>;
    types?: InputTypeLike[];
    gestures?: Array<string | Intent>;
    prioritizedOverUnhandled?: boolean;
}
export interface HandleOptions extends ConditionsOptions, RoutesOptions, UnknownObject {
}
export declare class HandlerMetadata<COMPONENT extends BaseComponent = BaseComponent, KEY extends keyof COMPONENT = keyof COMPONENT> extends MethodDecoratorMetadata<COMPONENT, KEY> {
    readonly target: ComponentConstructor<COMPONENT> | Function;
    readonly propertyKey: KEY;
    readonly options: HandleOptions;
    constructor(target: ComponentConstructor<COMPONENT> | Function, propertyKey: KEY, options?: HandleOptions);
    get intents(): Array<string | Intent>;
    get intentNames(): string[];
    get globalIntentNames(): string[];
    get hasCondition(): boolean;
    mergeWith(otherMetadata: HandlerMetadata<COMPONENT, KEY> | HandlerOptionMetadata<COMPONENT, KEY>): HandlerMetadata<COMPONENT, KEY>;
}
