import { Logger, LogLevelDesc } from 'loglevel';
import { JovoError } from './JovoError';
export interface JovoLoggerConfig {
    name: string | symbol;
    level: LogLevelDesc;
    styling: boolean;
    errorProperties: Array<keyof JovoError>;
}
export declare class JovoLogger {
    readonly logger: Logger;
    config: JovoLoggerConfig;
    constructor(nameOrConfig?: string | Partial<JovoLoggerConfig>);
    get level(): LogLevelDesc;
    set level(level: LogLevelDesc);
    getDefaultConfig(): JovoLoggerConfig;
    trace(...args: unknown[]): void;
    log(...args: unknown[]): void;
    debug(...args: unknown[]): void;
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
    jovoError(error: JovoError): void;
    private style;
    private applyStyleIfEnabled;
}
