import { Component, h, Prop } from '@stencil/core'
import tocbot from 'tocbot'

@Component({
  tag: 'stencila-toc',
  styleUrls: {
    default: 'tableOfContents.css',
    material: 'tableOfContents.material.css',
  },
})
export class TableOfContents {
  public static readonly elementName = 'stencila-toc'

  /**
   * Where to grab the headings to build the table of contents.
   */
  @Prop() public contentSelector = 'article'

  /**
   * Which headings to grab inside of the contentSelector element.
   */
  @Prop() public headingSelector = 'h1, h2, h3, h4'

  private initTOC = (): void => {
    tocbot.init({
      tocSelector: '.toc',
      positionFixedSelector: '.toc',
      contentSelector: this.contentSelector,
      headingSelector: this.headingSelector,
    })
  }

  public componentDidLoad(): void {
    if (
      document.readyState === 'interactive' ||
      (document.readyState === 'complete' &&
        document.querySelector(this.contentSelector))
    ) {
      this.initTOC()
    } else {
      document.addEventListener('DOMContentLoaded', this.initTOC)
    }
  }

  public disconnectedCallback(): void {
    document.removeEventListener('DOMContentLoaded', this.initTOC)
  }

  public render(): HTMLElement {
    return <nav class="toc" />
  }
}
