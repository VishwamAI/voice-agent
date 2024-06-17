import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { ConnectionPostalAddress } from '../models';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionScheduleTaxiReservationOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    partySize?: number;
    pickupLocation?: ConnectionPostalAddress;
    pickupTime?: string;
    dropoffLocation?: ConnectionPostalAddress;
}
export declare class ConnectionScheduleTaxiReservationOutput extends BaseOutput<ConnectionScheduleTaxiReservationOutputOptions> {
    getDefaultOptions(): ConnectionScheduleTaxiReservationOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
