import { html } from 'lit-html'

export default {
  title: 'Molecules/Node List',
  component: 'stencila-node-list',
}

export const emptyState = () => html`
  <stencila-node-list></stencila-node-list>
`

export const singleNode = () => html`
  <stencila-node-list>
    <figure>
      <pre><output>Text result</output></pre>
    </figure>
  </stencila-node-list>
`
export const multipleNodes = () => html`
  <stencila-node-list>
    <figure>
      <pre><output>Text result</output></pre>
      <stencila-image-object>
        <img src="https://place-hold.it/150" />
      </stencila-image-object>
      <stencila-data-table>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </stencila-data-table>

      <pre><output>bin   dev  home  lib32	libx32	mnt  proc  run	 srv  tmp  var
boot  etc  lib	 lib64	media	opt  root  sbin  sys  usr</output></pre>

      <pre><output >true</output></pre>

      <pre><output >20</output></pre>

      <pre><output >null</output></pre>

      <stencila-image-plotly></stencila-image-plotly>
    </figure>
  </stencila-node-list>
`

export const dataTable = () => html`
  <stencila-node-list>
    <figure>
      <stencila-data-table>
        <table>
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </stencila-data-table>
    </figure>
  </stencila-node-list>
`
