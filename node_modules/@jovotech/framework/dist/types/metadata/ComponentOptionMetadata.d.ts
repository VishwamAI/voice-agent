import { BaseComponent, ComponentConstructor } from '../BaseComponent';
import { ClassDecoratorMetadata } from './ClassDecoratorMetadata';
import { ComponentOptionsOf } from './ComponentMetadata';
export declare function createComponentOptionDecorator<COMPONENT extends BaseComponent = BaseComponent>(options: Partial<ComponentOptionsOf<COMPONENT>>): ClassDecorator;
export declare class ComponentOptionMetadata<COMPONENT extends BaseComponent = BaseComponent> extends ClassDecoratorMetadata<COMPONENT> {
    readonly target: ComponentConstructor<COMPONENT> | Function;
    readonly options: Partial<ComponentOptionsOf<COMPONENT>>;
    constructor(target: ComponentConstructor<COMPONENT> | Function, options?: Partial<ComponentOptionsOf<COMPONENT>>);
}
