import { AxiosError } from '@jovotech/framework';
export declare const TIMEZONE = "System.timeZone";
export declare function getSystemTimeZone(apiEndpoint: string, deviceId: string, permissionToken: string): Promise<string>;
export declare function handleSettingsApiErrors(error: AxiosError): Error | void;
