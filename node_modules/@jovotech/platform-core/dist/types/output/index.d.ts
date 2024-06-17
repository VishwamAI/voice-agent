import { NormalizedCoreOutputTemplate } from './models';
declare module '@jovotech/output/dist/types/models/NormalizedOutputTemplatePlatforms' {
    interface NormalizedOutputTemplatePlatforms {
        core?: NormalizedCoreOutputTemplate;
    }
}
export * from './models';
export * from './CoreOutputTemplateConverterStrategy';
