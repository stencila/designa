import { Fragment, FunctionalComponent, h } from '@stencil/core'

const getProperties = (valueEl?: Element) => {
  return {
    default: valueEl?.getAttribute('placeholder')?.toLowerCase() ?? undefined,
  }
}

export const BooleanValidator = ({
  valueEl,
}: {
  valueEl?: Element
}): FunctionalComponent => {
  const values = getProperties(valueEl)
  return (
    <Fragment>
      <label>
        Default value
        <input
          type="checkbox"
          name="default"
          checked={values.default === 'true'}
        />
      </label>
    </Fragment>
  )
}
