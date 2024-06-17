import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { PermissionScopeLike } from '../models';
export interface AskForPermissionOutputOptions extends OutputOptions {
    token?: string;
    permissionScope?: PermissionScopeLike;
}
export declare class AskForPermissionOutput extends BaseOutput<AskForPermissionOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
