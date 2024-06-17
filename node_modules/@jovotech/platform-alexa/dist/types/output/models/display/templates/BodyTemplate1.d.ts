import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { TextContent } from '../TextContent';
export declare class BodyTemplate1 implements DisplayTemplate<DisplayTemplateType.Body1> {
    type: DisplayTemplateType.Body1;
    token: string;
    backButton?: BackButtonVisibilityLike;
    backgroundImage?: Image;
    title: string;
    textContent: TextContent;
}
