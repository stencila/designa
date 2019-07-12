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

storiesOf('Molecules/Code Block', module).add(
  'default',
  () =>
    '<pre class="language-html line-numbers"> <code>' +
    escapeHtml(`<p class="column is-full"> <p class="columns is-centered">
    <p class="column is-three-quarters"> <p class="content">
        <h1 class="title is-3"> Beta testing</h1>
        <p> Stencila Hub is an open source project under active development.</p>
        <p> While things are still in a little flaky, and to limit demands on our servers, we 're currently restricting access to registered beta testers.</p>
        <p> Sign up to <a href="https://stenci.la/community/beta-testing.html"> become a beta tester </a>, and/or <a href="https://github.com/stencila/hub"> help us develop the site</a>.</p>
    </p> </p> </p> <div class="columns is-centered">
        <div class="column is-three-quarters">
            <form method="post"> <input type="hidden" name="csrfmiddlewaretoken" value="mhyN1vpjNJm82PMWHxHCXY3i2KPkM93l1pfh0BvjtJYzIYpogl82jf2qOSTxnWiU">
                <div id="div_id_token" class="field">
                <label for="id_token" class="label">
                    Token <span class="asterisk"> * </span>
                </label>
                <input type="password" name="token" class="input" required="" id="id_token"> </div>
                <div class="form-actions">
                    <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        class="btn btn-primary " id="submit-id-submit"
                    />
                </div>
        </form>
    </div>
    </div>
    </p>`) +
    '</code> </pre>'
)
