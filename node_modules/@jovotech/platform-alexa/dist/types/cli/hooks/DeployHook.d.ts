import type { DeployPlatformContext, DeployPlatformEvents } from '@jovotech/cli-command-deploy';
import { InstallContext } from '@jovotech/cli-core';
import { AlexaCli } from '..';
import { AlexaContext } from '../interfaces';
import { AlexaHook } from './AlexaHook';
export interface DeployPlatformContextAlexa extends AlexaContext, DeployPlatformContext {
    flags: DeployPlatformContext['flags'] & {
        'ask-profile'?: string;
        'skill-id'?: string;
        'async'?: boolean;
        'skip-validation'?: boolean;
    };
    alexa: AlexaContext['alexa'] & {
        skillCreated?: boolean;
        isACSkill?: boolean;
    };
}
export declare class DeployHook extends AlexaHook<DeployPlatformEvents> {
    $plugin: AlexaCli;
    $context: DeployPlatformContextAlexa;
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
     * Checks if the platform folder for the current plugin exists.
     */
    checkForPlatformsFolder(): void;
    /**
     * Deploys platform-specific models to the Alexa Skills Console.
     */
    deploy(): Promise<void>;
    /**
     * Returns Alexa Skill ID from .ask/config.
     */
    getSkillId(): string | undefined;
    /**
     * Returns skill information.
     */
    getSkillInformation(): {
        name: string;
        skillId?: string;
    };
    /**
     * Returns the skill's invocation name.
     * @param locale - The locale for which to get the invocation name.
     */
    getInvocationName(locale: string): string;
}
