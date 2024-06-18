import { RequestBuilder, UnknownObject } from '@jovotech/framework';
import { CorePlatform } from './CorePlatform';
import { CoreRequest } from './CoreRequest';
export declare class CoreRequestBuilder extends RequestBuilder<CorePlatform> {
    launch(json?: UnknownObject): CoreRequest;
    intent(name?: string): CoreRequest;
    intent(json?: UnknownObject): CoreRequest;
}
