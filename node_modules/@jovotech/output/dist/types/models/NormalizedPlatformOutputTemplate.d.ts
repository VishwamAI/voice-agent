import { DeepPartial } from '@jovotech/common';
import { NullableOutputTemplateBase } from '..';
import { ListenValue } from './Listen';
import { Card } from './Card';
import { Carousel } from './Carousel';
import { MessageValue } from './Message';
import { QuickReplyValue } from './QuickReply';
export declare class NormalizedPlatformOutputTemplate<RESPONSE extends Record<string, unknown> = Record<string, unknown>> implements NullableOutputTemplateBase {
    [key: string]: unknown;
    nativeResponse?: DeepPartial<RESPONSE>;
    message?: MessageValue | null;
    reprompt?: MessageValue | null;
    listen?: ListenValue | null;
    quickReplies?: QuickReplyValue[] | null;
    card?: Card | null;
    carousel?: Carousel | null;
}
