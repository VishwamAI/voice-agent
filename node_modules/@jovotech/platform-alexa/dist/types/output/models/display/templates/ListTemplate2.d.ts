import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { DisplayTemplateList2Item } from '../list-items/DisplayTemplateList2Item';
export declare class ListTemplate2 implements DisplayTemplate<DisplayTemplateType.List2> {
    type: DisplayTemplateType.List2;
    token: string;
    backButton?: BackButtonVisibilityLike;
    title: string;
    backgroundImage?: Image;
    listItems: DisplayTemplateList2Item[];
}
