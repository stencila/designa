import { ExecuteRequired, ExecuteStatus } from '../code/codeTypes';
export declare class CodeDependency {
  /**
   * The Node ID, should match the HTML `id` attribute.
   */
  nodeId: string;
  /**
   * User assigned label for the node
   */
  label: string | undefined;
  /**
   * Node kind, such as `CodeChunk`, `CodeExpression`, `Parameter`, etc.
   * Aligns with the Stencila Schema node types.
   */
  nodeKind: string;
  /**
   * Whether the dependency should be automatically re-executed based on semantic
   * analysis of the code.
   */
  executeAuto: 'Always' | 'Auto' | 'Never';
  /**
   * Status of upstream dependencies, and whether the node needs to be
   * re-executed
   */
  executeRequired: ExecuteRequired;
  /**
   * The execution status of the code node
   */
  executeStatus?: ExecuteStatus;
  /**
   * Programming language of the CodeExpression, note that not all nodes have this
   * property (`Parameter` for example).
   */
  programmingLanguage?: string;
  render(): any;
}
