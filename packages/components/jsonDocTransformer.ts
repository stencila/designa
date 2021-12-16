/**
 *
 * Stencil Doc Outputs don't seem to support custom-elements.json as suggested
 * here: https://github.com/w3c/webcomponents/issues/776#issuecomment-536749457.
 * This generator uses the custom-elements-manifest analyze package (https://github.com/open-wc/custom-elements-manifest/tree/master/packages/analyzer)
 * instead, allowing the documentation to be used by Storybook.
 */

import { exec } from 'child_process'

export async function generateJsonDocs() {
  exec('npm run build:docs')
}
