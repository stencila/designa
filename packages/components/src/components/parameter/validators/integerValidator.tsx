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

export const IntegerValidator = ({
  valueEl,
}: {
  valueEl?: Element
}): FunctionalComponent => {
  const values = getProperties(valueEl)
  return (
    <Fragment>
      <label>
        Default value
        <input type="number" name="default" step="1" value={values.default} />
      </label>

      <label>
        Minimum
        <input type="number" name="minimum" step="1" value={values.minimum} />
      </label>

      <label>
        Maximum
        <input type="number" name="maximum" step="1" value={values.maximum} />
      </label>
    </Fragment>
  )
}
