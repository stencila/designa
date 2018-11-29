import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Call To Action', module)
  .add('Buttons', () => `
      <div class="container">
          <h1 class="is-size-1 has-text-weight-bold">Call to action buttons</h1>

          <p>A call to action button is a regular <code>button</code>, with additional classes of:</p>
          <br>
          <ul>
            <li><code>.is-rounded</code></li>
            <li><code>.call-to-action</code></li>
          </ul>
          <br>
          <p>With variation of <code>is-large</code></p>

          <section class="storybook-section">
              <h2 class="has-text-weight-bold storybook-section__header">Button Variations</h2>
              <div class="buttons">
                <a class="button call-to-action is-primary is-rounded" href="#">
                    Call to action
                </a>
                <code class="tag is-black">.button.call-to-action.is-primary.is-rounded</code>
              </div>
              <div class="buttons">
                <a class="button call-to-action is-primary is-rounded is-large" href="#">
                    Call to action - Large
                </a>
                <code class="tag is-black">.button.call-to-action.is-primary.is-rounded.is-large</code>
              </div>
          </section>
      </div>

  `)


  // <div class="call-to-action-with-text">
  //     <a id="download-desktop-button" class="button call-to-action is-primary is-rounded is-large" href="https://github.com/stencila/desktop/releases/download/v0.28.2/Stencila-0.28.2.dmg">
  //         <div id="download-desktop-details">Download Beta</div>
  //     </a>
  //
  //     <div id="download-desktop-other" style="" class="call-to-action-text">
  //         This is the desktop version for <span id="download-desktop-os">MacOS</span>.<br>
  //         For other versions please <a id="download-desktop-other-link" href="https://github.com/stencila/desktop/releases">go here</a>
  //     </div>
  //
  // </div>
