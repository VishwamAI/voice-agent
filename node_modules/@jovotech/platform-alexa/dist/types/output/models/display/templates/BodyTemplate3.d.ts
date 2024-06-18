import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { TextContent } from '../TextContent';
export declare class BodyTemplate3 implements DisplayTemplate<DisplayTemplateType.Body3> {
    type: DisplayTemplateType.Body3;
    token: string;
    backButton?: BackButtonVisibilityLike;
    backgroundImage?: Image;
    title: string;
    image: Image;
    textContent: TextContent;
}
