import readme from '../../../packages/components/src/components/codeChunk/readme.md'

export default {
  title: 'Atoms/Code Editor'
}

export const codeEditor = () =>
  `<stencila-code-editor>print(2 + 2); &lt;a href="#"&gt;test&lt;/a&gt;</stencila-code-editor>`

export const withoutLineNumbers = () =>
  `<stencila-code-editor line-numbers="false">print(2 + 2); &lt;a href="#"&gt;test&lt;/a&gt;</stencila-code-editor>`

// Add README contents to exported stories
;[codeEditor, withoutLineNumbers].map(
  entry =>
    (entry.story = {
      parameters: {
        readme: {
          sidebar: readme
        }
      }
    })
)
