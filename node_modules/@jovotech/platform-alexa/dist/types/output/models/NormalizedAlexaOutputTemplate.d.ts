import { NormalizedPlatformOutputTemplate } from '@jovotech/output';
import { AlexaOutputTemplateResponse } from './AlexaOutputTemplateResponse';
import { AplList } from './apl/AplList';
export declare class NormalizedAlexaOutputTemplate extends NormalizedPlatformOutputTemplate<AlexaOutputTemplateResponse> {
    nativeResponse?: AlexaOutputTemplateResponse;
    list?: AplList;
}
