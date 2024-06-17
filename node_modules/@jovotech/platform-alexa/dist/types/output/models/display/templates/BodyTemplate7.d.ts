import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
export declare class BodyTemplate7 implements DisplayTemplate<DisplayTemplateType.Body7> {
    type: DisplayTemplateType.Body7;
    token: string;
    backButton?: BackButtonVisibilityLike;
    title: string;
    backgroundImage?: Image;
    image: Image;
}
