import type { DeployPlatformContext, DeployPlatformEvents } from '@jovotech/cli-command-deploy';
import { PluginHook } from '@jovotech/cli-core';
import { GoogleAssistantCli } from '..';
import { GoogleContext } from '../utilities';
export interface GoogleDeployContext extends DeployPlatformContext, GoogleContext {
}
export declare class DeployHook extends PluginHook<DeployPlatformEvents> {
    $plugin: GoogleAssistantCli;
    $context: GoogleDeployContext;
    install(): void;
    /**
     * Checks if the currently selected platform matches this CLI plugin.
     */
    checkForPlatform(): void;
    /**
     * Checks if the platform folder for the current plugin exists.
     */
    checkForPlatformsFolder(): void;
    /**
     * Deploys platform-specific files, such as intents and entities to the Google Actions Console.
     */
    deploy(): Promise<void>;
}
