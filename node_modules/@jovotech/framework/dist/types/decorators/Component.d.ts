import { BaseComponent, ComponentConstructor } from '../BaseComponent';
import { ComponentOptionsOf } from '../metadata/ComponentMetadata';
export declare function Component<COMPONENT extends BaseComponent = any>(options?: ComponentOptionsOf<COMPONENT>): (target: ComponentConstructor<COMPONENT>) => void;
