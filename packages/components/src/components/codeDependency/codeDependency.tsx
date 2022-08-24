import { Component, h, Host, Prop } from '@stencil/core'
import { CodeExecuteStatus } from '../code/codeExecuteStatus'
import { ExecuteRequired, ExecuteStatus } from '../code/codeTypes'

@Component({
  tag: 'stencila-code-dependency',
  styleUrls: {
    default: 'codeDependency.css',
    material: 'codeDependency.material.css',
  },
  scoped: true,
})
export class CodeDependency {
  /**
   * The Node ID, should match the HTML `id` attribute.
   */
  @Prop()
  nodeId: string

  /**
   * User assigned label for the node
   */
  @Prop()
  label: string | undefined

  /**
   * Node kind, such as `CodeChunk`, `CodeExpression`, `Parameter`, etc.
   * Aligns with the Stencila Schema node types.
   */
  @Prop()
  nodeKind: string

  /**
   * Whether the dependency should be automatically re-executed based on semantic
   * analysis of the code.
   */
  @Prop()
  executeAuto: 'Always' | 'Auto' | 'Never'

  /**
   * Status of upstream dependencies, and whether the node needs to be
   * re-executed
   */
  @Prop()
  executeRequired: ExecuteRequired

  /**
   * The execution status of the code node
   */
  @Prop()
  executeStatus?: ExecuteStatus

  /**
   * Programming language of the CodeExpression, note that not all nodes have this
   * property (`Parameter` for example).
   */
  @Prop()
  programmingLanguage?: string

  public render() {
    const [href, target] =
      this.nodeKind === 'File' && this.label
        ? [this.label, 'blank']
        : [`#${this.nodeId}`, '']
    return (
      <Host>
        <a href={href} target={target}>
          <CodeExecuteStatus
            executeStatus={this.executeStatus}
            executeRequired={this.executeRequired}
            nodeKind={this.nodeKind}
          ></CodeExecuteStatus>
          <div class="content">
            <div class="label">
              {this.label ?? this.nodeId}

              {this.programmingLanguage !== undefined && (
                <code>{this.programmingLanguage}</code>
              )}
            </div>

            <div>
              <span class="status">{this.nodeKind}</span>
            </div>
          </div>
        </a>
      </Host>
    )
  }
}
