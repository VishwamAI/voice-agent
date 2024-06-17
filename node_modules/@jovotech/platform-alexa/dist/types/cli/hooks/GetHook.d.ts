import type { BuildPlatformEvents } from '@jovotech/cli-command-build';
import type { GetPlatformContext, GetPlatformEvents } from '@jovotech/cli-command-get';
import { InstallContext } from '@jovotech/cli-core';
import { AlexaCli } from '..';
import { AlexaContext } from '../interfaces';
import { AlexaHook } from './AlexaHook';
export interface GetContextAlexa extends AlexaContext, GetPlatformContext {
    flags: GetPlatformContext['flags'] & {
        'ask-profile'?: string;
        'skill-id'?: string;
        'skill-stage'?: string;
    };
}
export declare class GetHook extends AlexaHook<BuildPlatformEvents | GetPlatformEvents> {
    $plugin: AlexaCli;
    $context: GetContextAlexa;
    install(): void;
    /**
     * Add platform-specific CLI options, including flags and args.
     * @param context - Context providing an access point to command flags and args.
     */
    addCliOptions(context: InstallContext): void;
    /**
     * Checks if the currently selected platform matches this CLI plugin.
     */
    checkForPlatform(): void;
    /**
     * Updates the current plugin context with platform-specific values.
     */
    updatePluginContext(): Promise<void>;
    /**
     * Checks if --clean has been set and deletes the platform folder accordingly
     */
    checkForCleanGet(): void;
    /**
     * Checks if platform-specific files already exist and prompts for overwriting them.
     */
    checkForExistingPlatformFiles(): Promise<void>;
    /**
     * Checks if the platform folder for the current plugin exists
     */
    checkForPlatformsFolder(): void;
    /**
     * Fetches platform-specific models from the Alexa Skills Console.
     */
    get(): Promise<void>;
}
