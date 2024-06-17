import { Card as GoogleAssistantCard, Collection, NormalizedGoogleAssistantOutputTemplate, Simple, Suggestion, TypeOverride } from './models';
declare module '@jovotech/output/dist/types/models/Card' {
    interface Card {
        toGoogleAssistantCard?(): GoogleAssistantCard;
    }
}
declare module '@jovotech/output/dist/types/models/Carousel' {
    interface Carousel {
        toGoogleAssistantCollectionData?(): {
            collection: Collection;
            typeOverride: TypeOverride;
        };
        toGoogleAssistantCard?(): GoogleAssistantCard;
    }
}
declare module '@jovotech/output/dist/types/models/Message' {
    interface Message {
        toGoogleAssistantSimple?(): Simple;
    }
}
declare module '@jovotech/output/dist/types/models/QuickReply' {
    interface QuickReply {
        toGoogleAssistantSuggestion?(): Suggestion;
    }
}
declare module '@jovotech/output/dist/types/models/NormalizedOutputTemplatePlatforms' {
    interface NormalizedOutputTemplatePlatforms {
        googleAssistant?: NormalizedGoogleAssistantOutputTemplate;
    }
}
export * from './models';
export * from './constants';
export * from './NextSceneOutput';
export * from './GoogleAssistantOutputTemplateConverterStrategy';
export { convertMessageToGoogleAssistantSimple } from './utilities';
