import { Card as BaseCard } from '@jovotech/output';
import { Image, ImageFillLike } from '../common/Image';
import { Link } from '../common/Link';
export declare class Card {
    title?: string;
    subtitle?: string;
    text?: string;
    image?: Image;
    imageFill?: ImageFillLike;
    button?: Link;
    toCard?(): BaseCard;
}
