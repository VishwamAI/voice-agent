/// <reference types="node" />
import { ParseError } from '@alexa/acdl';
import { ExecResponse, JovoCliError } from '@jovotech/cli-core';
import { ExecOptions } from 'child_process';
import { AskSkillChoice, AskSkillList } from './interfaces';
/**
 * Checks if ask cli is installed.
 */
export declare function checkForAskCli(): Promise<void>;
/**
 * Generates a choice list out of an ASK skill list.
 * @param askSkillList - List of Alexa Skills returned by the ASK CLI.
 */
export declare function prepareSkillList(askSkillList: AskSkillList): AskSkillChoice[];
export declare function getACValidationErrorHint(errors: ParseError[]): string;
export declare function getAskError(method: string, stderr: string): JovoCliError;
export declare function copyFiles(src: string, dest: string): void;
export declare function execAskCommand(id: string, cmd: string | string[], askProfile?: string, execOptions?: ExecOptions): Promise<ExecResponse>;
/**
 * Prompt for a project, depending on provided choices.
 * @param choices - Array of choices (projects) to choose from.
 */
export declare function promptListForAlexaSkill(choices: AskSkillChoice[]): Promise<{
    skill: {
        skillId: string;
        stage: string;
    };
}>;
