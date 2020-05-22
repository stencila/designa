/**
 * Based on https://gist.github.com/sledsworth/44a1a3bb339a3b292de4f401431bdfab
 *
 * Stencil Doc Outputs don't seem to support custom-elements.json as suggested
 * here: https://github.com/w3c/webcomponents/issues/776#issuecomment-536749457.
 * This generator implements this standard, which is used by Storybook to display
 * documentation.
 */

export async function generateJsonDocs(
  config,
  compilerCtx,
  _buildCtx,
  docsData
) {
  const jsonOutputTargets = config.outputTargets.filter(
    isOutputTargetCustomElementDocsJson
  )

  const { components, ...docsDataWithoutComponents } = docsData

  const json = {
    ...docsDataWithoutComponents,
    tags: components.map((cmp) => ({
      filePath: cmp.filePath,
      encapsulation: cmp.encapsulation,
      tag: cmp.tag,
      name: cmp.tag,
      readme: cmp.readme,
      description: cmp.docs,
      docsTags: cmp.docsTags,
      usage: cmp.usage,
      properties: cmp.props.map((prop) => ({
        ...prop,
        description: prop.docs,
      })),
      attributes: cmp.props
        .filter((prop) => prop.attr !== undefined)
        .map((prop) => ({
          ...prop,
          name: prop.attr,
          description: prop.docs,
        })),
      events: cmp.events.map((e) => ({
        ...e,
        name: e.event,
        description: e.docs,
        type: e.detail,
      })),
      styles: cmp.styles,
      methods: cmp.methods.map((method) => ({
        name: method.name,
        description: method.docs,
        signature: method.signature,
      })),
      slots: cmp.slots.map((slot) => ({
        name: slot.name,
        description: slot.docs,
      })),
      cssProperties: cmp.styles
        .filter((style) => style.annotation === 'prop')
        .map((style) => ({
          name: style.name,
          description: style.docs,
        })),
      cssParts: cmp.parts.map((part) => ({
        name: part.name,
        description: part.docs,
      })),
      dependents: cmp.dependents,
      dependencies: cmp.dependencies,
      dependencyGraph: cmp.dependencyGraph,
      deprecation: cmp.deprecation,
    })),
  }

  const jsonContent = JSON.stringify(json, null, 2)

  await Promise.all(
    jsonOutputTargets.map(() => {
      return writeDocsOutput(compilerCtx, jsonContent, config.rootDir)
    })
  )
}

const isOutputTargetCustomElementDocsJson = (o) =>
  o.name === 'custom-element-docs'

export const writeDocsOutput = async (
  compilerCtx,
  jsonContent: string,
  root: string
) => {
  return compilerCtx.fs.writeFile(
    `${root}/dist/custom-elements.json`,
    jsonContent
  )
}
