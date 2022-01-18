import { FunctionalComponent, h } from '@stencil/core'
import { ExecuteRequired, ExecuteStatus } from './codeTypes'
import { executionIconByStatus } from './codeUtils'

interface Props {
  executeStatus: ExecuteStatus
  executeRequired: ExecuteRequired
  slot?: string
}

export const CodeExecuteStatus = (props: Props): FunctionalComponent => {
  const status = executionIconByStatus(
    props.executeStatus,
    props.executeRequired
  )

  return (
    <stencila-tooltip
      text={status.title}
      slot={props.slot}
      position="right-end"
    >
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
