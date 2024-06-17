import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { ConnectionPostalAddress } from '../models';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionRestaurant {
    '@type': 'Restaurant';
    '@version': '1';
    'name': string;
    'location': ConnectionPostalAddress;
}
export interface ConnectionScheduleFoodEstablishmentReservationOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    startTime?: string;
    partySize?: number;
    restaurant: ConnectionRestaurant;
}
export declare class ConnectionScheduleFoodEstablishmentReservationOutput extends BaseOutput<ConnectionScheduleFoodEstablishmentReservationOutputOptions> {
    getDefaultOptions(): ConnectionScheduleFoodEstablishmentReservationOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
