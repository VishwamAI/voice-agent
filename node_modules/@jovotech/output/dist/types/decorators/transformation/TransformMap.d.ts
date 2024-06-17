import { Constructor, UnknownObject } from '@jovotech/common';
export declare function TransformMap<T extends UnknownObject>(typeFunction: () => Constructor<T>): PropertyDecorator;
