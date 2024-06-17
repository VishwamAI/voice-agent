import { Image } from '../../common/Image';
import { BackButtonVisibilityLike, DisplayTemplate, DisplayTemplateType } from '../DisplayTemplate';
import { DisplayTemplateList1Item } from '../list-items/DisplayTemplateList1Item';
export declare class ListTemplate1 implements DisplayTemplate<DisplayTemplateType.List1> {
    type: DisplayTemplateType.List1;
    token: string;
    backButton?: BackButtonVisibilityLike;
    title: string;
    backgroundImage?: Image;
    listItems: DisplayTemplateList1Item[];
}
