import { AnyObject, ExtensibleInitConfig, Platform, PlatformConfig } from '@jovotech/framework';
import { Core } from './Core';
import { CoreDevice } from './CoreDevice';
import { CoreRequest } from './CoreRequest';
import { CoreRequestBuilder } from './CoreRequestBuilder';
import { CoreResponse } from './CoreResponse';
import { CoreUser } from './CoreUser';
import { CoreOutputTemplateConverterStrategy } from './output';
export interface CorePlatformConfig<PLATFORM extends string = 'core' | string> extends PlatformConfig {
    platform: PLATFORM | string;
}
export declare class CorePlatform<PLATFORM extends string = 'core' | string> extends Platform<CoreRequest, CoreResponse, Core, CoreUser, CoreDevice, CorePlatform<PLATFORM>, CorePlatformConfig> {
    /**
     Returns a new platform-class with the given name that extends CorePlatform.
  
     In order to make the type-system aware of the new class, some module augmentations have to be done.
     For a reference, take a look at the example below.
  
     Example:
  
     declare module '@jovotech/framework/dist/types/Extensible' {
       interface ExtensiblePluginConfig {
         WebPlatform?: CorePlatformConfig<'web'>;
       }
  
       interface ExtensiblePlugins {
         WebPlatform?: CorePlatform<'web'>;
       }
     }
  
     declare module '@jovotech/framework/dist/types/Jovo' {
       interface Jovo {
         $web?: Core;
       }
     }
  
     declare module '@jovotech/framework/dist/types/index' {
        interface NormalizedOutputTemplatePlatforms {
          web?: NormalizedCoreOutputTemplate;
        }
     }
  
     // create the class
     const WebPlatform = CorePlatform.createCustomPlatform('WebPlatform', 'web');
     // instantiate the class
     const webPlatform = new WebPlatform();
     */
    static createCustomPlatform<PLATFORM extends string>(className: string, platform: PLATFORM, jovoReferenceKey?: string): new (config?: ExtensibleInitConfig<CorePlatformConfig<PLATFORM>>) => CorePlatform<PLATFORM>;
    readonly id: string;
    readonly outputTemplateConverterStrategy: CoreOutputTemplateConverterStrategy;
    readonly requestClass: typeof CoreRequest;
    readonly jovoClass: typeof Core;
    readonly userClass: typeof CoreUser;
    readonly deviceClass: typeof CoreDevice;
    readonly requestBuilder: typeof CoreRequestBuilder;
    getDefaultConfig(): CorePlatformConfig;
    isRequestRelated(request: AnyObject | CoreRequest): boolean;
    isResponseRelated(response: AnyObject | CoreResponse): boolean;
    finalizeResponse(response: CoreResponse, corePlatformApp: Core): CoreResponse | Promise<CoreResponse>;
}
