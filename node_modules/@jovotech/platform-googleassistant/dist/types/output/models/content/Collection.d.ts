import { ImageFillLike } from '../common/Image';
export declare class Collection {
    title?: string;
    subtitle?: string;
    items: CollectionItem[];
    imageFill?: ImageFillLike;
}
export declare class CollectionItem {
    key: string;
}
