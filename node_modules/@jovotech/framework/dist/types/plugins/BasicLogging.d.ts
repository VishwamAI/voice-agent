import { EnumLike } from '@jovotech/common';
import { LoggingFormat } from '../enums';
import { HandleRequest, Jovo } from '../index';
import { Plugin, PluginConfig } from '../Plugin';
declare module '../interfaces' {
    interface RequestData {
        _BASIC_LOGGING_START?: number;
    }
}
declare module '../Extensible' {
    interface ExtensiblePluginConfig {
        BasicLogging?: BasicLoggingConfig;
    }
    interface ExtensiblePlugins {
        BasicLogging?: BasicLogging;
    }
}
export interface RequestResponseConfig {
    enabled: boolean;
    objects?: string[];
    maskedObjects?: string[];
    excludedObjects?: string[];
}
export interface BasicLoggingConfig extends PluginConfig {
    request?: RequestResponseConfig | boolean;
    response?: RequestResponseConfig | boolean;
    format?: EnumLike<LoggingFormat>;
    /** @deprecated Use the property "format" instead */
    styling?: boolean;
    maskValue?: unknown;
    indentation?: string | number;
    colorizeSettings?: {
        colors: {
            BRACE?: string;
            BRACKET?: string;
            COLON?: string;
            COMMA?: string;
            STRING_KEY?: string;
            STRING_LITERAL?: string;
            NUMBER_LITERAL?: string;
            BOOLEAN_LITERAL?: string;
            NULL_LITERAL?: string;
        };
    };
}
export declare class BasicLogging extends Plugin<BasicLoggingConfig> {
    getDefaultConfig(): BasicLoggingConfig;
    constructor(config?: BasicLoggingConfig);
    mount(parent: HandleRequest): Promise<void> | void;
    logRequest(jovo: Jovo): Promise<void>;
    logResponse(jovo: Jovo): Promise<void>;
}
