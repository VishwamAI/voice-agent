import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { TextContent } from '../TextContent';
export declare class BodyTemplate2 implements DisplayTemplate<DisplayTemplateType.Body2> {
    type: DisplayTemplateType.Body2;
    token: string;
    backButton?: BackButtonVisibilityLike;
    backgroundImage?: Image;
    title: string;
    image: Image;
    textContent: TextContent;
}
