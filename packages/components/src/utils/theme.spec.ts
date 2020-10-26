import { getColor } from './theme'

describe('get colors', () => {
  it('gets default color from palette keyword', () => {
    expect(getColor('primary')).toEqual('var(--color-primary-500)')
  })

  it('gets specific color from palette keyword', () => {
    expect(getColor('success-200')).toEqual('var(--color-success-200)')
  })

  it('does not change CSS variable strings', () => {
    expect(getColor('--color-success-200')).toEqual('var(--color-success-200)')
  })

  it('does not change custom CSS variable strings', () => {
    expect(getColor('--some-custom-variable')).toEqual(
      'var(--some-custom-variable)'
    )
  })

  it('does not change CSS HEX color values', () => {
    expect(getColor('#FF9900')).toEqual('#FF9900')
  })

  it('does not change CSS color keywords', () => {
    expect(getColor('purple')).toEqual('purple')
  })

  it('does not change CSS RGB color values', () => {
    expect(getColor('rgb(100, 100, 100)')).toEqual('rgb(100, 100, 100)')
  })

  it('does not change CSS RGBA color values', () => {
    expect(getColor('rgb(100, 100, 100, 0.3)')).toEqual(
      'rgb(100, 100, 100, 0.3)'
    )
  })
})
