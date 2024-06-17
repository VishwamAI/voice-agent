import { HandlerMetadata } from '../metadata/HandlerMetadata';
export declare class RouteMatch {
    readonly metadata: HandlerMetadata;
    readonly path: string[];
    readonly stackIndex?: number | undefined;
    skip?: boolean;
    constructor(metadata: HandlerMetadata, path: string[], stackIndex?: number | undefined);
    get component(): string;
    get handler(): string;
    get score(): number;
    get subState(): string | undefined;
    get global(): boolean | undefined;
    get prioritizedOverUnhandled(): boolean | undefined;
    get type(): string | undefined;
    toJSON(): Omit<RouteMatch, 'metadata' | 'path' | 'score' | 'toJSON'>;
}
