import { ComponentConstructor, ComponentDeclaration } from './BaseComponent';
import { ComponentTreeNode } from './ComponentTreeNode';
import { DuplicateChildComponentsError } from './errors/DuplicateChildComponentsError';
export interface Tree<NODE extends {
    children?: Tree<NODE>;
}> {
    [key: string]: NODE;
}
/**
 * @example Structure of ComponentTree
 * {
 * "tree": {
 *   "GlobalComponent": {
 *     "path": [
 *       "GlobalComponent"
 *     ],
 *     "metadata": {
 *       "options": {
 *         "global": true
 *       }
 *     }
 *   },
 *   "RootComponent": {
 *     "path": [
 *       "RootComponent"
 *     ],
 *     "metadata": {
 *       "options": {
 *         "components": [
 *           "NestedComponent"
 *         ]
 *       }
 *     },
 *     "children": {
 *       "NestedComponent": {
 *         "path": [
 *           "RootComponent",
 *           "NestedComponent"
 *         ],
 *         "metadata": {
 *           "options": {}
 *         },
 *         "parent": "RootComponent"
 *       }
 *     }
 *   }
 * }
 *}
 */
export declare class ComponentTree {
    static createComponentToNodeMapper(componentTree: ComponentTree, parent?: ComponentTreeNode): (component: ComponentConstructor | ComponentDeclaration) => ComponentTreeNode;
    static createComponentsToTreeReducer(componentTree: ComponentTree, parent?: ComponentTreeNode): (tree: Tree<ComponentTreeNode>, component: ComponentConstructor | ComponentDeclaration) => Tree<ComponentTreeNode>;
    readonly tree: Tree<ComponentTreeNode>;
    readonly initialBuildErrors: Array<DuplicateChildComponentsError | Error>;
    constructor(...components: Array<ComponentConstructor | ComponentDeclaration>);
    [Symbol.iterator](): Iterator<ComponentTreeNode>;
    initialize(): Promise<void>;
    add(...components: Array<ComponentConstructor | ComponentDeclaration>): void;
    getNodeAt(path: string[]): ComponentTreeNode | undefined;
    getNodeAtOrFail(path: string[]): ComponentTreeNode;
    /**
     * Find a node that matches the componentName relative to the node at relativeTo
     */
    getNodeRelativeTo(componentName: string, relativeTo?: string[]): ComponentTreeNode | undefined;
    getNodeRelativeToOrFail(componentName: string, relativeTo?: string[]): ComponentTreeNode;
    forEach(callback: (node: ComponentTreeNode) => void): void;
    private iterateNodes;
    private buildTreeForComponents;
}
