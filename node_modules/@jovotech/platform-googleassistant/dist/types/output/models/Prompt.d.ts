import { MessageValue } from '@jovotech/output';
import { Image } from './common/Image';
import { Link } from './common/Link';
import { Suggestion } from './common/Suggestion';
import { Card } from './content/Card';
import { Collection } from './content/Collection';
import { List } from './content/List';
import { Media } from './content/Media';
import { Table } from './content/Table';
export declare class Canvas {
    url: string;
    data?: unknown[];
    suppressMic?: boolean;
}
export declare class Simple {
    speech?: string;
    text?: string;
    toMessage?(): MessageValue;
}
export declare class Content {
    card?: Card;
    image?: Image;
    table?: Table;
    media?: Media;
    collection?: Collection;
    list?: List;
}
export declare class Prompt {
    override?: boolean;
    firstSimple?: Simple;
    content?: Content;
    lastSimple?: Simple;
    suggestions?: Suggestion[];
    link?: Link;
    canvas?: Canvas;
    orderUpdate?: unknown;
}
