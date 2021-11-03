import { newE2EPage } from '@stencil/core/testing'

const el = 'stencila-button'
const defaultEl = '<stencila-button>Hello there</stencila-button>'

const getEl = (html: string = defaultEl) =>
  newE2EPage().then(async (page) => {
    await page.setContent(html)
    return page
  })

describe('stencila-button', () => {
  it('renders', async () => {
    const page = await getEl()

    const element = await page.find(el)
    expect(element).toHaveClass('hydrated')
    expect(element.textContent).toBe('Hello there')
  })

  it('triggers the click handler', async () => {
    const page = await getEl()

    // Inject a spy function into the page, and attach it to the button's click handler
    const fnSpy = jest.fn()
    await page.exposeFunction('fnSpy', fnSpy)
    await page.$eval(el, (elm) => {
      elm.addEventListener('click', fnSpy)
    })

    const button = await page.find(`${el}`)
    button.click().catch((err) => {
      console.log(err)
    })

    await page.waitForChanges()

    expect(fnSpy).toHaveBeenCalled()
  })
})
