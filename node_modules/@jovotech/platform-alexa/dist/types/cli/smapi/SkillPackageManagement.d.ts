import { ImportStatus } from '../interfaces';
export declare function createNewUploadUrl(askProfile?: string): Promise<string>;
export declare function createSkillPackage(location: string, askProfile?: string): Promise<string | undefined>;
export declare function importSkillPackage(location: string, skillId: string, askProfile?: string): Promise<string | undefined>;
export declare function exportSkillPackage(skillId: string, stage: string, cwd: string, askProfile?: string): Promise<void>;
export declare function getImportStatus(importId: string, askProfile?: string, isAsync?: boolean): Promise<ImportStatus>;
