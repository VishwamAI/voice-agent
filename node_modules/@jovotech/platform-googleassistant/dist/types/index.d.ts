import type { GoogleAssistantCli as GoogleAssistantCliType } from './cli';
import { GoogleAssistant } from './GoogleAssistant';
import { GoogleAssistantPlatform } from './GoogleAssistantPlatform';
import { SessionParamsReprompts } from './output';
declare module '@jovotech/framework/dist/types/Extensible' {
    interface ExtensiblePluginConfig {
        GoogleAssistantPlatform?: GoogleAssistantPlatform;
    }
    interface ExtensiblePlugins {
        GoogleAssistantPlatform?: GoogleAssistantPlatform;
    }
}
declare module '@jovotech/framework/dist/types/JovoSession' {
    interface JovoSession {
        _GOOGLE_ASSISTANT_REPROMPTS_?: SessionParamsReprompts;
        _GOOGLE_ASSISTANT_SELECTION_INTENT_?: string;
    }
    interface PersistableSessionData {
        _GOOGLE_ASSISTANT_REPROMPTS_?: SessionParamsReprompts;
        _GOOGLE_ASSISTANT_SELECTION_INTENT_?: string;
    }
}
declare module '@jovotech/framework/dist/types/Jovo' {
    interface Jovo {
        $googleAssistant?: GoogleAssistant;
    }
}
export declare const GoogleAssistantCli: typeof GoogleAssistantCliType;
export * from './enums';
export * from './GoogleAssistant';
export * from './GoogleAssistantPlatform';
export * from './GoogleAssistantRequest';
export * from './GoogleAssistantResponse';
export * from './GoogleAssistantUser';
export * from './GoogleAssistantHandles';
export * from './GoogleAssistantDevice';
export * from './interfaces';
export * from './output';
