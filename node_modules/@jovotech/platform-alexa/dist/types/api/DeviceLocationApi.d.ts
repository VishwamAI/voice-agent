import { AxiosError } from '@jovotech/framework';
export declare const ADDRESS = "address";
export declare const COUNTRY_AND_POSTAL_CODE = "address/countryAndPostalCode";
export interface DeviceLocation {
    city: string;
    countryCode: string;
    postalCode: string;
}
export interface DeviceAddressLocation extends DeviceLocation {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    districtOrCounty: string;
    stateOrRegion: string;
    city: string;
}
export declare function getDeviceLocation(apiEndpoint: string, deviceId: string, permissionToken: string): Promise<DeviceLocation>;
export declare function getDeviceAddress(apiEndpoint: string, deviceId: string, permissionToken: string): Promise<DeviceAddressLocation>;
export declare function handleDeviceLocationApiErrors(error: AxiosError): Error | void;
