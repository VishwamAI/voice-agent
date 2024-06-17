import type { NewContext, NewEvents } from '@jovotech/cli-command-new';
import { AlexaCli } from '..';
import { AlexaContext } from '../interfaces';
import { AlexaHook } from './AlexaHook';
export declare class NewHook extends AlexaHook<NewEvents> {
    $plugin: AlexaCli;
    $context: NewContext & AlexaContext;
    install(): void;
    addSystemIntents(): void;
}
