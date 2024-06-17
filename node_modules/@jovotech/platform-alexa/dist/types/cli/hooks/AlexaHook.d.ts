import { DefaultEvents, Events, PluginHook } from '@jovotech/cli-core';
import { AlexaCli } from '..';
import { AlexaContext, AskConfig, AskResources } from '../interfaces';
export declare abstract class AlexaHook<EVENTS extends Events = DefaultEvents> extends PluginHook<EVENTS> {
    $plugin: AlexaCli;
    $context: AlexaContext;
    updatePluginContext(): void;
    /**
     * Saves Alexa Skill ID to .ask/config.
     * @param skillId
     */
    setSkillId(skillId: string): void;
    /**
     * Creates an empty ask config file.
     */
    createEmptyAskConfig(): void;
    /**
     * Tries to get the ask profile from the "ask-resources.json" file
     */
    getAskProfile(): Promise<string | undefined>;
    /**
     * Returns Alexa resources file
     */
    getAskResources(): AskResources;
    /**
     * Returns Alexa Config
     */
    getAskConfig(): AskConfig | undefined;
}
