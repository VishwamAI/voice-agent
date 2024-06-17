/// <reference types="lodash" />
import type { BuildPlatformContext, BuildPlatformEvents } from '@jovotech/cli-command-build';
import { InstallContext, PluginHook } from '@jovotech/cli-core';
import { JovoModelData, JovoModelDataV3, NativeFileInformation } from '@jovotech/model';
import { GoogleAssistantCli } from '..';
import { GoogleContext } from '../utilities';
export interface BuildPlatformContextGoogle extends BuildPlatformContext, GoogleContext {
    flags: BuildPlatformContext['flags'] & {
        'project-id'?: string;
    };
    googleAssistant: GoogleContext['googleAssistant'] & {
        defaultLocale?: string;
    };
}
export declare class BuildHook extends PluginHook<BuildPlatformEvents> {
    $plugin: GoogleAssistantCli;
    $context: BuildPlatformContextGoogle;
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
     * Checks, if --clean has been set and deletes the platform folder accordingly.
     */
    checkForCleanBuild(): void;
    /**
     * Checks if any provided locale is not supported, thus invalid.
     */
    validateLocales(): void;
    /**
     * Validates Jovo models with platform-specific validators.
     */
    validateModels(): Promise<void>;
    /**
     * Builds Jovo model files from platform-specific files.
     */
    buildReverse(): Promise<void>;
    /**
     * Builds platform-specific models from Jovo language model.
     */
    build(): Promise<void>;
    /**
     * Creates Google Conversational Action specific project files.
     */
    buildProjectFiles(): Promise<void>;
    /**
     * Creates and returns tasks for each locale to build the interaction model for Alexa.
     */
    buildInteractionModel(): Promise<string[]>;
    /**
     * Builds and saves a Google Conversational Action model from a Jovo model.
     * @param modelLocale - Locale of the Jovo model.
     * @param resolvedLocales - Locales to which to resolve the modelLocale.
     */
    buildLanguageModel(modelLocale: string, resolvedLocales: string[]): Promise<void>;
    /**
     * Gets configured actions from config.
     */
    getProjectActions(): import("lodash").FieldWithPossiblyUndefined<import("@jovotech/cli-core").Files | undefined, "[\"actions/\"]">;
    /**
     * Sets the default locale for the current Conversational Action.
     */
    setDefaultLocale(): void;
    /**
     * Try to get locale resolution (en -> en-US) from project configuration.
     * @param locale - The locale to get the resolution from.
     */
    getProjectLocales(locale: string): string[];
    /**
     * Get plugin-specific endpoint.
     */
    getPluginEndpoint(): string;
    /**
     * Gets the invocation name for the specified locale.
     * @param locale - The locale of the Jovo model to fetch the invocation name from.
     */
    getInvocationName(locale: string): Promise<string>;
    /**
     * Parses and returns platform-specific intents and entities.
     * @param locale - Locale for which to return the model data.
     */
    getPlatformModels(locale: string): NativeFileInformation[];
    /**
     * Parses platform-specific settings and returns the localized invocation name.
     * @param locale - Locale for which to parse the invocation name.
     */
    getPlatformInvocationName(locale: string): string;
    /**
     * Returns all locales for the current platform.
     */
    getPlatformLocales(): string[];
    /**
     * Loads a Jovo model specified by a locale and merges it with plugin-specific models.
     * @param locale - The locale that specifies which model to load.
     */
    getJovoModel(locale: string): Promise<JovoModelData | JovoModelDataV3>;
}
