import { UnknownObject } from '@jovotech/common';
import { RequestBuilder, TestPlatform } from '..';
import { TestRequest } from './TestRequest';
export declare class TestRequestBuilder extends RequestBuilder<TestPlatform> {
    launch(json?: UnknownObject): TestRequest;
    intent(name?: string): TestRequest;
    intent(json?: UnknownObject): TestRequest;
}
