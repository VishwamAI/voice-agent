"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorePlatform = void 0;
const framework_1 = require("@jovotech/framework");
const Core_1 = require("./Core");
const CoreDevice_1 = require("./CoreDevice");
const CoreRequest_1 = require("./CoreRequest");
const CoreRequestBuilder_1 = require("./CoreRequestBuilder");
const CoreUser_1 = require("./CoreUser");
const output_1 = require("./output");
class CorePlatform extends framework_1.Platform {
    constructor() {
        super(...arguments);
        this.id = 'core';
        this.outputTemplateConverterStrategy = new output_1.CoreOutputTemplateConverterStrategy();
        this.requestClass = CoreRequest_1.CoreRequest;
        this.jovoClass = Core_1.Core;
        this.userClass = CoreUser_1.CoreUser;
        this.deviceClass = CoreDevice_1.CoreDevice;
        this.requestBuilder = CoreRequestBuilder_1.CoreRequestBuilder;
    }
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
    static createCustomPlatform(className, platform, jovoReferenceKey = `$${platform}`) {
        // Workaround to make the anonymous' class name equal to className
        const obj = {
            [className]: class extends CorePlatform {
                constructor(config) {
                    super(config);
                    this.outputTemplateConverterStrategy.platformName = platform;
                }
                getDefaultConfig() {
                    return Object.assign(Object.assign({}, super.getDefaultConfig()), { platform });
                }
                get name() {
                    return className;
                }
            },
        };
        // Make the Core-instance that is related to this new class available to Jovo
        (0, framework_1.registerPlatformSpecificJovoReference)(jovoReferenceKey, Core_1.Core);
        return obj[className];
    }
    getDefaultConfig() {
        return {
            platform: 'core',
        };
    }
    isRequestRelated(request) {
        var _a;
        return (request.version &&
            request.timestamp &&
            ((_a = request.input) === null || _a === void 0 ? void 0 : _a.type) &&
            request.platform === this.config.platform);
    }
    isResponseRelated(response) {
        return (response.version &&
            response.output &&
            response.context &&
            response.context.user &&
            response.context.session &&
            response.platform === this.config.platform);
    }
    finalizeResponse(response, corePlatformApp) {
        response.platform = this.config.platform;
        response.context.session = Object.assign(Object.assign({}, response.context.session), { id: corePlatformApp.$session.id, data: corePlatformApp.$session.data, state: corePlatformApp.$session.state });
        return response;
    }
}
exports.CorePlatform = CorePlatform;
//# sourceMappingURL=CorePlatform.js.map