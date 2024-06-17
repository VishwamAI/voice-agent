import { Jovo } from '../Jovo';
import { RouteMatch } from './RouteMatch';
import { JovoRoute } from './RouterPlugin';
export declare class RoutingExecutor {
    readonly jovo: Jovo;
    constructor(jovo: Jovo);
    execute(): Promise<JovoRoute>;
    getRankedRouteMatches(): Promise<RouteMatch[]>;
    setSkipForRouteMatches(rankedRouteMatches: RouteMatch[]): void;
    resolveRoute(routeMatches: RouteMatch[]): Promise<RouteMatch | undefined>;
    private isMatchingHandler;
    private getRankedGlobalRouteMatches;
    private isMatchingGlobalHandler;
    private getGlobalRouteMatches;
    private getRankedLocalRouteMatches;
    private isMatchingLocalHandler;
    private getLocalRouteMatches;
    private areHandlerConditionsFulfilled;
    private createHandlerMetadataToRouteMatchMapper;
    private compareRouteMatchRanking;
}
