import { Fragment, FunctionalComponent, h } from '@stencil/core'

export const NumberValidator = (): FunctionalComponent => {
  return (
    <Fragment>
      <label>
        Default value
        <input type="number" name="default" step="any" />
      </label>

      <label>
        Minimum
        <input type="number" name="minimum" step="any" />
      </label>

      <label>
        Maximum
        <input type="number" name="maximum" step="any" />
      </label>
    </Fragment>
  )
}
