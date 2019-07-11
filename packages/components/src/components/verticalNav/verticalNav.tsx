import { Component, h, Prop } from '@stencil/core'
import { Collection, CreativeWork, Node } from '@stencila/schema'

const parseCreativeWorks = (
  c: CreativeWork[],
  path = '/'
): HTMLUListElement => (
  <ul class="toc-list">
    {c.map((part): HTMLLIElement[] =>
      part.parts ? (
        <li>
          <details open>
            <summary>{part.name}</summary>
            {parseCreativeWorks(part.parts, (part.name || '') + '/')}
          </details>
        </li>
      ) : (
        <li>
          <a class="toc-link" href={path + (part.name || '')}>
            {part.name} (<code>{path + (part.name || '')}</code>)
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
  shadow: true
})
export class VerticalNav {
  @Prop() public collection?: Collection
  private _collection: Collection = this.collection

  // TODO: Move these helpers from Encoda to Schema
  private isCollection = (node: Node): node is Collection =>
    node &&
    typeof node !== 'boolean' &&
    typeof node !== 'number' &&
    typeof node !== 'string' &&
    !Array.isArray(node) &&
    node.type === 'Collection'

  public componentWillLoad(): void {
    // Use the collection Prop if one exists, otherwise try to read it from the HTML head
    if (this.collection) {
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

      return this.isCollection(contents) ? [...scripts, contents] : scripts
    }, [])

    this._collection = _col[0]
  }

  public render(): HTMLElement {
    return <nav class="toc">{parseCreativeWorks(this._collection.parts)}</nav>
  }
}
