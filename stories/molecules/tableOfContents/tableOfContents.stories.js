import { storiesOf } from '@storybook/html'

storiesOf('Molecules/Table of Contents', module).add(
  'Nested Contents',
  () =>
    `<nav class="toc toc-right js-toc">
    <ol class="toc-list ">
      <li class="toc-list-item is-active-li">
        <a href="#" class="toc-link is-active-link">
          Get Started
        </a>
        <ol class="toc-list is-collapsible">
          <li class="toc-list-item">
            <a href="#" class="toc-link">Include JS</a>
          </li>
          <li class="toc-list-item">
            <a href="#" class="toc-link">Include CSS</a>
          </li>
          <li class="toc-list-item">
            <a href="#" class="toc-link">Usage</a>
          </li>
        </ol>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">Examples</a>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">Requirements</a>
        <ol class="toc-list is-collapsible is-collapsed">
          <li class="toc-list-item">
            <a href="#" class="toc-link">
              Fixed headers
            </a>
          </li>
        </ol>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">API</a>
        <ol class="toc-list is-collapsible is-collapsed">
          <li class="toc-list-item">
            <a href="#" class="toc-link">Options</a>
          </li>
          <li class="toc-list-item">
            <a href="#" class="toc-link">Methods</a>
            <ol class="toc-list is-collapsible is-collapsed">
              <li class="toc-list-item">
                <a href="#" class="toc-link">.init</a>
              </li>
              <li class="toc-list-item">
                <a href="#" class="toc-link">.destroy</a>
              </li>
              <li class="toc-list-item">
                <a href="#" class="toc-link">.refresh</a>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">Roadmap</a>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">Contributing</a>
        <ol class="toc-list is-collapsible is-collapsed">
          <li class="toc-list-item">
            <a href="#" class="toc-link">
              Running Tests
            </a>
            <ol class="toc-list is-collapsible is-collapsed">
              <li class="toc-list-item">
                <a href="#" class="toc-link">All tests</a>
              </li>
              <li class="toc-list-item">
                <a href="#" class="toc-link">
                  With debugger
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">
          Steps to publish
        </a>
      </li>
      <li class="toc-list-item">
        <a href="#" class="toc-link">License</a>
      </li>
    </ol>
  </nav>
  `
)
