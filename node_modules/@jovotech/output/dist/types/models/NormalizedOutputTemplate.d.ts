import { NormalizedOutputTemplatePlatforms } from './NormalizedOutputTemplatePlatforms';
import { OutputTemplateBase } from './OutputTemplateBase';
export declare class NormalizedOutputTemplate extends OutputTemplateBase {
    static getKeys(): Array<keyof NormalizedOutputTemplate>;
    platforms?: NormalizedOutputTemplatePlatforms;
}
