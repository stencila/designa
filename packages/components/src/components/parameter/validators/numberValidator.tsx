import { Fragment, FunctionalComponent, h } from '@stencil/core'

const getProperties = (valueEl?: Element) => {
  return {
    default:
      valueEl?.getAttribute('placeholder') ??
      valueEl?.getAttribute('value') ??
      undefined,
    minimum: valueEl?.getAttribute('min') ?? undefined,
    maximum: valueEl?.getAttribute('max') ?? undefined,
  }
}

export const NumberValidator = ({
  valueEl,
}: {
  valueEl?: Element
}): FunctionalComponent => {
  const values = getProperties(valueEl)

  return (
    <Fragment>
      <label>
        Default value
        <input type="number" name="default" step="any" value={values.default} />
      </label>

      <label>
        Minimum
        <input type="number" name="minimum" step="any" value={values.minimum} />
      </label>

      <label>
        Maximum
        <input type="number" name="maximum" step="any" value={values.maximum} />
      </label>
    </Fragment>
  )
}
