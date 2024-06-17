import { JovoUser } from '@jovotech/framework';
import { GoogleAssistant } from './GoogleAssistant';
import { GoogleAccountProfile } from './interfaces';
export declare class GoogleAssistantUser extends JovoUser<GoogleAssistant> {
    get id(): string | undefined;
    get accessToken(): string | undefined;
    isAccountLinked(): boolean;
    isVerified(): boolean;
    setId(id: string | undefined): void;
    getGoogleProfile(): Promise<GoogleAccountProfile>;
}
