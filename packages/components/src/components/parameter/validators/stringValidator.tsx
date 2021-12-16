import { Fragment, FunctionalComponent, h } from '@stencil/core'

const getProperties = (valueEl?: Element) => {
  return {
    default: valueEl?.getAttribute('placeholder') ?? undefined,
    minLength: valueEl?.getAttribute('minLength') ?? undefined,
    maxLength: valueEl?.getAttribute('maxLength') ?? undefined,
    pattern: valueEl?.getAttribute('pattern') ?? undefined,
  }
}

export const StringValidator = ({
  valueEl,
}: {
  valueEl?: Element
}): FunctionalComponent => {
  const values = getProperties(valueEl)

  return (
    <Fragment>
      <label>
        Default value
        <input type="text" name="default" value={values.default} />
      </label>

      <label>
        Minimum length
        <input
          type="number"
          step="1"
          name="minLength"
          value={values.minLength}
          min="0"
        />
      </label>

      <label>
        Maximum length
        <input
          type="number"
          step="1"
          name="maxLength"
          value={values.maxLength}
        />
      </label>

      <label>
        Pattern (RegEx)
        <input type="text" name="pattern" value={values.pattern} />
      </label>
    </Fragment>
  )
}
