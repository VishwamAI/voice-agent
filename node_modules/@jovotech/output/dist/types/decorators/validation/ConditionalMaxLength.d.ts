import { UnknownObject } from '@jovotech/common';
import { ValidationOptions } from '../..';
export declare function ConditionalMaxLength<T = UnknownObject>(conditionFn: (obj: T) => number, options?: ValidationOptions): PropertyDecorator;
