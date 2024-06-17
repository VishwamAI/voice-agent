import { JovoError } from '@jovotech/framework';
export declare class LanguageModelDirectoryNotFoundError extends JovoError {
    readonly languageModelPath: string;
    constructor(languageModelPath: string);
}
