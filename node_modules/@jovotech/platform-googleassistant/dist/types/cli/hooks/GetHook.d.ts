import type { BuildPlatformEvents } from '@jovotech/cli-command-build';
import type { GetPlatformContext, GetPlatformEvents } from '@jovotech/cli-command-get';
import { InstallContext, PluginHook } from '@jovotech/cli-core';
import { GoogleAssistantCli } from '..';
import { GoogleContext } from '../utilities';
export interface GoogleGetContext extends GetPlatformContext, GoogleContext {
    flags: GetPlatformContext['flags'] & {
        'project-id'?: string;
    };
}
export declare class GetHook extends PluginHook<GetPlatformEvents | BuildPlatformEvents> {
    $plugin: GoogleAssistantCli;
    $context: GoogleGetContext;
    install(): void;
    /**
     * Add platform-specific CLI options, including flags and args.
     * @param context - Context providing an access point to command flags and args.
     */
    addCliOptions(context: InstallContext): void;
    /**
     * Checks if the currently selected platform matches this CLI plugin.
     * @param context - Context containing information after flags and args have been parsed by the CLI.
     */
    checkForPlatform(): void;
    /**
     * Updates the current plugin context with platform-specific values.
     */
    updatePluginContext(): void;
    /**
     * Checks if platform-specific files already exist and prompts for overwriting them.
     */
    checkForExistingPlatformFiles(): Promise<void>;
    /**
     * Fetches platform-specific models, such as intents and entities from the Google Actions Console.
     */
    get(): Promise<void>;
}
