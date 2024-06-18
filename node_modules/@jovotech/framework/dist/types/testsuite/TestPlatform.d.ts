import { ExtensibleConfig, Platform, PlatformConfig } from '..';
import { TestDevice } from './TestDevice';
import { TestJovo } from './TestJovo';
import { TestOutputConverterStrategy } from './TestOutputConverterStrategy';
import { TestRequest } from './TestRequest';
import { TestRequestBuilder } from './TestRequestBuilder';
import { TestResponse } from './TestResponse';
import { TestUser } from './TestUser';
export declare class TestPlatform extends Platform<TestRequest, TestResponse, TestJovo, TestUser, TestDevice, TestPlatform, PlatformConfig> {
    readonly id = "testplatform";
    readonly jovoClass: typeof TestJovo;
    readonly requestClass: typeof TestRequest;
    readonly outputTemplateConverterStrategy: TestOutputConverterStrategy;
    readonly userClass: typeof TestUser;
    readonly requestBuilder: typeof TestRequestBuilder;
    readonly deviceClass: typeof TestDevice;
    isRequestRelated(request: TestRequest): boolean;
    finalizeResponse(response: TestResponse | TestResponse[]): TestResponse | TestResponse[];
    isResponseRelated(): boolean;
    getDefaultConfig(): ExtensibleConfig;
}
