import { Component, h, Prop } from '@stencil/core'
import { Collection, CreativeWork, isA } from '@stencila/schema'

const parseCreativeWorks = (
  c: CreativeWork[],
  path = '/'
): HTMLUListElement => (
  <ul class="toc-list">
    {c.map((part): HTMLLIElement[] =>
      part.parts !== undefined ? (
        <li>
          <details open>
            <summary>{part.name}</summary>
            {parseCreativeWorks(part.parts, (part.name ?? '') + '/')}
          </details>
        </li>
      ) : (
        <li>
          <a class="toc-link" href={path + (part.name ?? '')}>
            {part.name} (<code>{path + (part.name ?? '')}</code>)
          </a>
        </li>
      )
    )}
  </ul>
)

@Component({
  tag: 'stencila-vertical-nav',
  styleUrls: {
    default: './verticalNav.css',
    material: './verticalNav.material.css'
  },
  scoped: true
})
export class VerticalNav {
  /**
   * Collection schema from which to generate a table of contents
   */
  @Prop() public collection?: Collection

  private _collection?: Collection = this.collection

  public componentWillLoad(): void {
    // Use the collection Prop if one exists, otherwise try to read it from the HTML head
    if (this.collection !== undefined) {
      return
    }

    const _col: Collection[] = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    ).reduce((scripts: Collection[], el) => {
      let contents: {}
      try {
        contents = JSON.parse(el.innerHTML)
      } catch (e) {
        return scripts
      }

      return isA('Collection', contents) ? [...scripts, contents] : scripts
    }, [])

    this._collection = _col[0]
  }

  public render(): HTMLElement {
    return (
      <nav class="toc">{parseCreativeWorks(this._collection?.parts ?? [])}</nav>
    )
  }
}
