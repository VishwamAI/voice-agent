import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { TextContent } from '../TextContent';
export declare class BodyTemplate6 implements DisplayTemplate<DisplayTemplateType.Body6> {
    type: DisplayTemplateType.Body6;
    token: string;
    backButton?: BackButtonVisibilityLike;
    backgroundImage?: Image;
    image: Image;
    textContent: TextContent;
}
