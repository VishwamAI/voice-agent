import { BaseComponent } from '@jovotech/framework';
export declare class JarvisComponent extends BaseComponent {
    $send(response: any): Promise<void>;
    SetReminderIntent(): Promise<void>;
    CheckWeatherIntent(): Promise<void>;
    PlayMusicIntent(): Promise<void>;
    AnswerQuestionIntent(): Promise<void>;
    OpenBrowserIntent(): Promise<void>;
    NavigateBrowserIntent(): Promise<void>;
}
