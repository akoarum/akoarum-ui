import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ATexts from './ATexts.vue'

storiesOf('level1/ATexts', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ATexts },
    props: {
      texts: { default: text('テキスト', '吾輩は猫である。名前はまだない。') },
      size: { default: text('フォントサイズ', '16') },
      lineHeight: { default: text('行間', '1.9') }
    },
    template: `
      <ATexts :size="size" :line-height="lineHeight">{{ texts }}</ATexts>
    `
  }), { info: {} })
  .add('Caution', () => ({
    components: { ATexts },
    props: {
      texts: { default: text('テキスト', '吾輩は猫である。名前はまだない。') },
      size: { default: text('フォントサイズ', '16') },
      lineHeight: { default: text('行間', '1.9') }
    },
    template: `
      <ATexts :size="size" :line-height="lineHeight" caution>{{ texts }}</ATexts>
    `
  }), { info: {} })
  .add('Note', () => ({
    components: { ATexts },
    props: {
      texts: { default: text('テキスト', '吾輩は猫である。名前はまだない。') },
      size: { default: text('フォントサイズ', '16') },
      lineHeight: { default: text('行間', '1.9') }
    },
    template: `
      <ATexts :size="size" :line-height="lineHeight" note>{{ texts }}</ATexts>
    `
  }), { info: {} })
