import { CodeExpression } from '@stencila/schema';
import { StencilaNodeUpdateEvent } from '../../globals/events';
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes';
export declare class CodeExpressionComponent implements CodeComponent<CodeExpression> {
  private el;
  private emptyOutputMessage;
  private hoverTimeOut;
  private hoverStartedAt;
  private outputSlot;
  /**
   * A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`.
   */
  executeHandler?: (codeExpression: CodeExpression) => Promise<CodeExpression>;
  /**
   * Programming language of the CodeExpression
   */
  programmingLanguage: string;
  /**
   * Stencila CodeExpression node to render
   */
  codeExpression?: CodeExpression;
  hover: boolean;
  isCodeVisible: boolean;
  isOutputEmpty: boolean;
  executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED';
  private getOutputSlotContents;
  private checkIfEmpty;
  componentWillLoad(): void;
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  onUpdateCodeChunk({ detail }: CustomEvent<StencilaNodeUpdateEvent>): void;
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the editor.
   */
  getContents(): Promise<CodeExpression>;
  private collapseAllListenHandler;
  private toggleCodeVisibility;
  private selectTextSlot;
  private getTextSlotContents;
  private handleKeyDown;
  private onExecuteHandler;
  /**
   * Run the `CodeExpression`
   */
  execute(): Promise<CodeExpression>;
  private executeRef;
  private dividerArrow;
  private onMouseOutHandler;
  private addHoverState;
  private removeHoverState;
  private generateContent;
  render(): HTMLElement;
}
