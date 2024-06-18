import { AnyObject } from '@jovotech/framework';
import { AplParameter } from './AplParameter';
export declare class AplLayout {
    [key: string]: unknown;
    description?: string;
    item?: AnyObject;
    items?: AnyObject[];
    parameters?: Array<AplParameter | string>;
}
