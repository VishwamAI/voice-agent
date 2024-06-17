import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { PermissionScopeLike } from '../models';
export interface AskForPermissionConsentCardOutputOptions extends OutputOptions {
    type?: 'AskForPermissionsConsent';
    permissions?: PermissionScopeLike[];
}
export declare class AskForPermissionConsentCardOutput extends BaseOutput<AskForPermissionConsentCardOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
