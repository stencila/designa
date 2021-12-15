import { Fragment, FunctionalComponent, h } from '@stencil/core'

export const StringValidator = (): FunctionalComponent => {
  return (
    <Fragment>
      <label>
        Minimum length
        <input type="number" name="minLength" />
      </label>

      <label>
        Maximum length
        <input type="number" name="maxLength" />
      </label>
    </Fragment>
  )
}
