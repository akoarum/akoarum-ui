import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import StoryRouter from 'storybook-vue-router'
import AButton from './AButton.vue'

storiesOf('level1/AButton', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('Button', () => ({
    components: { AButton },
    props: {
      label: { default: text('ラベル', 'ボタン') },
      primary: { default: boolean('プライマリ', false) },
      secondary: { default: boolean('セカンダリ', false) },
      caution: { default: boolean('注意・警告', false) },
      outline: { default: boolean('アウトライン', false) },
      small: { default: boolean('小', false) },
      large: { default: boolean('大', false) }
    },
    template: `
      <AButton
        :primary="primary"
        :secondary="secondary"
        :caution="caution"
        :outline="outline"
        :small="small"
        :large="large"
        @click="click"
      >
        {{ label }}
      </AButton>
    `,
    methods: {
      click: action('click')
    }
  }), { info: {} })
  .add('Link', () => ({
    components: { AButton },
    props: {
      label: { default: text('ラベル', 'リンク') },
      primary: { default: boolean('プライマリ', false) },
      secondary: { default: boolean('セカンダリ', false) },
      caution: { default: boolean('注意・警告', false) },
      outline: { default: boolean('アウトライン', false) },
      small: { default: boolean('小', false) },
      large: { default: boolean('大', false) },
    },
    template: `
      <AButton
        :primary="primary"
        :secondary="secondary"
        :caution="caution"
        :outline="outline"
        :small="small"
        :large="large"
        to="/"
      >
        {{ label }}
      </AButton>
    `
  }), { info: {} })
