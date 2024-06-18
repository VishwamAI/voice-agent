import { MessageValue } from '@jovotech/output';
import { OutputSpeech } from './models';
export declare function validateAlexaString(value: unknown): string | undefined | null | void;
export declare function convertMessageToOutputSpeech(message: MessageValue): OutputSpeech;
export declare function augmentModelPrototypes(): void;
