import { App, AppConfig, AppMiddlewares } from './App';
import { Extensible } from './Extensible';
import { ComponentTree, ComponentTreeNode, Platform, PossibleMiddlewareNames } from './index';
import { Server } from './Server';
export declare class HandleRequest extends Extensible<AppConfig, AppMiddlewares> {
    readonly app: App;
    readonly server: Server;
    readonly componentTree: ComponentTree;
    activeComponentNode?: ComponentTreeNode;
    platform: Platform;
    constructor(app: App, server: Server);
    get platforms(): ReadonlyArray<Platform>;
    initializeMiddlewareCollection(): App['middlewareCollection'];
    getDefaultConfig(): AppConfig;
    mount(): Promise<void>;
    dismount(): Promise<void>;
    skipMiddlewares(...middlewares: PossibleMiddlewareNames<AppMiddlewares>[]): void;
    skipMiddlewares(...middlewares: string[]): void;
    stopMiddlewareExecution(): void;
}
