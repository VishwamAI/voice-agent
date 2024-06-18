import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { ConnectionPermissionScopeLike, ConsentLevelLike } from '../models';
import { OnCompletion } from '../models/common/OnCompletion';
export interface PermissionScopeItem {
    permissionScope: ConnectionPermissionScopeLike;
    consentLevel: ConsentLevelLike;
}
export interface ConnectionAskForPermissionConsentOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    permissionScopes: PermissionScopeItem[];
}
export declare class ConnectionAskForPermissionConsentOutput extends BaseOutput<ConnectionAskForPermissionConsentOutputOptions> {
    getDefaultOptions(): ConnectionAskForPermissionConsentOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
