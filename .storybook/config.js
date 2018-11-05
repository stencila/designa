import { configure } from '@storybook/html'

const reqs = [
  // Currently, just getting stories from one folder
  // but in the future this could be split up into
  // separate folders e.g. `atoms`, `compounds`, `mixtures`
  require.context('../stories', true, /\.stories\.js$/)
]

function loadStories() {
  reqs.forEach(req =>
    req.keys().forEach((filename) => req(filename))
  )
}

configure(loadStories, module)
