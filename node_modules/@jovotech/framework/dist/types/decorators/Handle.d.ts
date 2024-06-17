import { BaseComponent } from '../BaseComponent';
import { HandleOptions } from '../metadata/HandlerMetadata';
export declare function Handle<COMPONENT extends BaseComponent = BaseComponent, KEY extends keyof COMPONENT = keyof COMPONENT>(options?: HandleOptions): MethodDecorator;
