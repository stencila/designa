import { Component, h, Prop } from '@stencil/core'
import { CreativeWork, Node } from '@stencila/schema'

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
            {parseCreativeWorks(part.parts, part.name + '/')}
          </details>
        </li>
      ) : (
        <li>
          <a class="toc-link" href={path + part.name}>
            {part.name} (<code>{path + part.name}</code>)
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
  private _collection: CreativeWork
  @Prop() public collection?: CreativeWork

  public componentWillLoad(): void {
    if (this.collection) {
      return
    }

    // @ts-ignore
    this._collection = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]')
    )
      .map((el): Node => JSON.parse(el.innerHTML))
      // @ts-ignore
      .filter((script): boolean => script.type === 'Collection')
  }

  public render(): HTMLElement {
    return (
      <nav class="toc">
        {this.collection
          ? parseCreativeWorks(this.collection.parts)
          : parseCreativeWorks(this._collection[0].parts)}
      </nav>
    )
  }
}
