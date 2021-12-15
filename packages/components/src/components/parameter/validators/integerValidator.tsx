import { Fragment, FunctionalComponent, h } from '@stencil/core'

export const IntegerValidator = (): FunctionalComponent => {
  return (
    <Fragment>
      <label>
        Default value
        <input type="number" name="default" step="1" />
      </label>

      <label>
        Minimum
        <input type="number" name="minimum" step="1" />
      </label>

      <label>
        Maximum
        <input type="number" name="maximum" step="1" />
      </label>
    </Fragment>
  )
}
