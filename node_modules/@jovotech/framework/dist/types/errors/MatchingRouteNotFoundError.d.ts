import { JovoError, UnknownObject } from '@jovotech/common';
import { JovoInput } from '../index';
import { StateStack } from '../JovoSession';
import { RouteMatch } from '../plugins/RouteMatch';
export interface MatchingRouteNotFoundErrorOptions {
    request: UnknownObject;
    input: JovoInput;
    state?: StateStack;
    matches?: RouteMatch[];
}
export declare class MatchingRouteNotFoundError extends JovoError {
    constructor({ request, input, state, matches }: MatchingRouteNotFoundErrorOptions);
}
