import { FunctionalComponent, h } from '@stencil/core'
import { ExecuteRequired, ExecuteStatus } from './codeTypes'
import { executionIconByStatus } from './codeUtils'

interface Props {
  executeStatus: ExecuteStatus
  executeRequired: ExecuteRequired
}

export const CodeExecuteStatus = (props: Props): FunctionalComponent => {
  const status = executionIconByStatus(
    props.executeStatus,
    props.executeRequired
  )

  return (
    <stencila-tooltip text={status.title}>
      <stencila-icon
        icon={status.icon}
        color={status.color}
        class={`executeStatus executeRequired-${
          props.executeRequired
        } ${props.executeStatus?.toLowerCase()}`}
      ></stencila-icon>
    </stencila-tooltip>
  )
}
