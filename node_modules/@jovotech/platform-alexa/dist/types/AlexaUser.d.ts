import { JovoUser } from '@jovotech/framework';
import { Alexa } from './Alexa';
import { AbsoluteReminder, RelativeReminder, ReminderListResponse, ReminderResponse } from './api/ReminderApi';
import { ListItem, ListMetadata } from './api/ListApi';
export declare class AlexaUser extends JovoUser<Alexa> {
    constructor(jovo: Alexa);
    get id(): string | undefined;
    get accessToken(): string | undefined;
    getEmail(): Promise<string | undefined>;
    getMobileNumber(): Promise<{
        countryCode: string;
        mobileNumber: string;
    } | undefined>;
    getName(): Promise<string | undefined>;
    getGivenName(): Promise<string | undefined>;
    getSpeakerName(): Promise<string | undefined>;
    getSpeakerGivenName(): Promise<string | undefined>;
    getSpeakerMobileNumber(): Promise<{
        countryCode: string;
        mobileNumber: string;
    } | undefined>;
    private getPersonProfileProperty;
    private getProfileProperty;
    setReminder(reminder: AbsoluteReminder | RelativeReminder): Promise<ReminderResponse>;
    updateReminder(alertToken: string, reminder: AbsoluteReminder | RelativeReminder): Promise<ReminderResponse>;
    deleteReminder(alertToken: string): Promise<ReminderResponse>;
    getAllReminders(): Promise<ReminderListResponse>;
    getReminder(alertToken: string): Promise<ReminderResponse>;
    getLists(): Promise<ListMetadata[]>;
    getListItem(listId: string, itemId: string): Promise<ListItem>;
    getListItems(listId: string, itemIds: string[]): Promise<ListItem[]>;
}
