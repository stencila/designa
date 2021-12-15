import { Fragment, FunctionalComponent, h } from '@stencil/core'

export const ConstantValidator = (): FunctionalComponent => {
  return (
    <Fragment>
      <label>
        Value
        <input name="value" />
      </label>
    </Fragment>
  )
}
