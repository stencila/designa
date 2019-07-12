import { storiesOf } from '@storybook/html'

var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
}

function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function(s) {
    return entityMap[s]
  })
}

storiesOf('Demo/Gcloud', module).add(
  'default',
  () =>
    `
      <aside>
      <ul role="tablist"><li role="presentation" ><a role="tab" tabindex="-1" href="#">Code</a></li>
      <li role="presentation" aria-selected="true"><a role="tab" tabindex="-1" href="#">Files</a></li>
      </ul>

      <form>

      <fieldset>
      <label>Name</label>
      <input />
      </fieldset>

      <fieldset>
      <label>Language</label>
      <select>
      <option>R</option>
      <option>Python</option>
      </select>
      </fieldset>

      <pre><code>` +
    escapeHtml(`rodents %>%
group_by(species) %>%
count() %>%
arrange(-n) %>%
rename('Species'=species, 'Individuals'=n)`) +
    `</code></pre>

      <button class="secondary">Run Code</button>
      </form>
      </aside>
    `
)
