import { boolean, select, text } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Atoms/Button/Primary',
  component: 'stencila-button',
  excludeStories: ['props'],
}

const defaultText = 'Sign In'
const defaultIcon = 'command'
const icons = [
  'activity',
  'airplay',
  'alert-circle',
  'alert-octagon',
  'alert-triangle',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'anchor',
  'aperture',
  'archive',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-down',
  'arrow-left-circle',
  'arrow-left',
  'arrow-right-circle',
  'arrow-right',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-right',
  'arrow-up',
  'at-sign',
  'award',
  'bar-chart-2',
  'bar-chart',
  'battery-charging',
  'battery',
  'bell-off',
  'bell',
  'bluetooth',
  'bold',
  'book-open',
  'book',
  'bookmark',
  'box',
  'briefcase',
  'calendar',
  'camera-off',
  'camera',
  'cast',
  'check-circle',
  'check-square',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'chrome',
  'circle',
  'clipboard',
  'clock',
  'cloud-drizzle',
  'cloud-lightning',
  'cloud-off',
  'cloud-rain',
  'cloud-snow',
  'cloud',
  'code',
  'codepen',
  'codesandbox',
  'coffee',
  'columns',
  'command',
  'compass',
  'copy',
  'corner-down-left',
  'corner-down-right',
  'corner-left-down',
  'corner-left-up',
  'corner-right-down',
  'corner-right-up',
  'corner-up-left',
  'corner-up-right',
  'cpu',
  'credit-card',
  'crop',
  'crosshair',
  'database',
  'delete',
  'disc',
  'dollar-sign',
  'download-cloud',
  'download',
  'droplet',
  'edit-2',
  'edit-3',
  'edit',
  'external-link',
  'eye-off',
  'eye',
  'facebook',
  'fast-forward',
  'feather',
  'figma',
  'file-minus',
  'file-plus',
  'file-text',
  'file',
  'film',
  'filter',
  'flag',
  'folder-minus',
  'folder-plus',
  'folder',
  'framer',
  'frown',
  'gift',
  'git-branch',
  'git-commit',
  'git-merge',
  'git-pull-request',
  'github',
  'gitlab',
  'globe',
  'grid',
  'hard-drive',
  'hash',
  'headphones',
  'heart',
  'help-circle',
  'hexagon',
  'home',
  'image',
  'inbox',
  'info',
  'instagram',
  'italic',
  'key',
  'layers',
  'layout',
  'life-buoy',
  'link-2',
  'link',
  'linkedin',
  'list',
  'loader',
  'lock',
  'log-in',
  'log-out',
  'mail',
  'map-pin',
  'map',
  'maximize-2',
  'maximize',
  'meh',
  'menu',
  'message-circle',
  'message-square',
  'mic-off',
  'mic',
  'minimize-2',
  'minimize',
  'minus-circle',
  'minus-square',
  'minus',
  'monitor',
  'moon',
  'more-horizontal',
  'more-vertical',
  'mouse-pointer',
  'move',
  'music',
  'navigation-2',
  'navigation',
  'octagon',
  'package',
  'paperclip',
  'pause-circle',
  'pause',
  'pen-tool',
  'percent',
  'phone-call',
  'phone-forwarded',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'phone',
  'pie-chart',
  'play-circle',
  'play',
  'plus-circle',
  'plus-square',
  'plus',
  'pocket',
  'power',
  'printer',
  'radio',
  'refresh-ccw',
  'refresh-cw',
  'repeat',
  'rewind',
  'rotate-ccw',
  'rotate-cw',
  'rss',
  'save',
  'scissors',
  'search',
  'send',
  'server',
  'settings',
  'share-2',
  'share',
  'shield-off',
  'shield',
  'shopping-bag',
  'shopping-cart',
  'shuffle',
  'sidebar',
  'skip-back',
  'skip-forward',
  'slack',
  'slash',
  'sliders',
  'smartphone',
  'smile',
  'speaker',
  'square',
  'star',
  'stop-circle',
  'sun',
  'sunrise',
  'sunset',
  'tablet',
  'tag',
  'target',
  'terminal',
  'thermometer',
  'thumbs-down',
  'thumbs-up',
  'toggle-left',
  'toggle-right',
  'tool',
  'trash-2',
  'trash',
  'trello',
  'trending-down',
  'trending-up',
  'triangle',
  'truck',
  'tv',
  'twitch',
  'twitter',
  'type',
  'umbrella',
  'underline',
  'unlock',
  'upload-cloud',
  'upload',
  'user-check',
  'user-minus',
  'user-plus',
  'user-x',
  'user',
  'users',
  'video-off',
  'video',
  'voicemail',
  'volume-1',
  'volume-2',
  'volume-x',
  'volume',
  'watch',
  'wifi-off',
  'wifi',
  'wind',
  'x-circle',
  'x-octagon',
  'x-square',
  'x',
  'youtube',
  'zap-off',
  'zap',
  'zoom-in',
  'zoom-out',
]

export const props = (overrides = {}) => ({
  color: select(
    'color',
    [
      'primary',
      'success',
      'warn',
      'danger',
      'neutral',
      'stock',
      'key',
      'brand',
    ],
    overrides.color || 'primary'
  ),
  disabled: boolean('disabled', overrides.disabled || false),
  fill: boolean('fill', overrides.fill || false),
  href: text('href', overrides.href || ''),
  icon: select('icon', icons, overrides.icon || defaultIcon),
  isLoading: boolean('isLoading', overrides.isLoading || false),
  label: text('Button Text', overrides.label || defaultText),
  minimal: boolean('minimal', overrides.minimal || false),
  secondary: boolean('isSecondary', overrides.isSecondary || false),
  size: select(
    'size',
    ['xsmall', 'small', 'default', 'large'],
    overrides.size || 'default'
  ),
  tooltip: text('tooltip', overrides.tooltip || undefined),
})

export const withText = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const withEmoji = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: '😀 😎 👍 💯',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isloading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const small = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'A small step',
    size: 'small',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isloading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const extraSmall = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'a very small step',
    size: 'xsmall',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isloading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const anchorButton = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'a very small step',
    size: 'xsmall',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isloading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const webComponent = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}</stencila-button
    >
  `
}

export const webComponent_withAnIcon = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({ icon: undefined, color: 'stock', fill: true })

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      .icon=${undefined}
      .fill=${fill}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M12 11v3h4.5c-.19 1.02-.711 1.742-1.575 2.32v2.048h2.637c1.543-1.42 2.434-3.513 2.434-5.998 0-.31-.033-.76-.097-1.352L12 11z"
            fill="#4285F4"
          ></path>
          <path
            d="M12.161 20.345c2.203 0 4.05-.73 5.401-1.977l-2.637-2.047c-.731.49-1.666.779-2.764.779-2.126 0-3.925-1.436-4.566-3.365H4.868v2.115a8.158 8.158 0 007.293 4.495z"
            fill="#34A853"
          ></path>
          <path
            d="M7.595 13.735a4.904 4.904 0 01-.256-1.55c0-.538.092-1.061.256-1.551V8.52H4.868A8.158 8.158 0 004 12.184c0 1.317.315 2.564.868 3.666l2.727-2.115z"
            fill="#FBBC04"
          ></path>
          <path
            d="M12.161 7.27c1.198 0 2.274.411 3.12 1.22l2.34-2.34c-1.413-1.318-3.26-2.126-5.46-2.126A8.158 8.158 0 004.868 8.52l2.727 2.114c.641-1.929 2.44-3.365 4.566-3.365z"
            fill="#EA4335"
          ></path>
        </g>
      </svg>
      ${label}
    </stencila-button>
  `
}

export const webComponent_withAFeatherIcon = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      .tooltip=${tooltip === '' ? undefined : tooltip}
      size=${size}
    >
      ${label}
    </stencila-button>
  `
}

export const webComponent_Link = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    icon: null,
    href: '#',
  })

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      .tooltip=${tooltip === '' ? undefined : tooltip}
      size=${size}
    >
      ${label}
    </stencila-button>
  `
}
