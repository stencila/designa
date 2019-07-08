import { Component, h, Prop } from '@stencil/core'
import tocbot from 'tocbot'

@Component({
  tag: 'stencila-toc',
  styleUrls: {
    default: 'tableOfContents.css',
    material: 'tableOfContents.material.css'
  }
})
export class TableOfContents {
  /**
   * Where to grab the headings to build the table of contents.
   */
  @Prop() contentSelector: string

  /**
   * Which headings to grab inside of the contentSelector element.
   */
  @Prop() headingSelector: string = 'h1, h2, h3, h4'

  private initTOC = () => {
    tocbot.init({
      tocSelector: '.toc',
      positionFixedSelector: '.toc',
      contentSelector: this.contentSelector,
      headingSelector: this.headingSelector
    })
  }

  componentDidLoad() {
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

  componentDidUnload() {
    document.removeEventListener('DOMContentLoaded', this.initTOC)
  }

  render() {
    return <nav class="toc" />
  }
}
