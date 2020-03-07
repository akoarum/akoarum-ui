import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ALabel from './ALabel.vue'

storiesOf('level1/ALabel', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ALabel },
    props: {
      label: { default: text('テキスト', 'ラベル') },
      span: { default: boolean('span要素', false) }
    },
    template: `
      <ALabel :span="span">{{ label }}</ALabel>
    `
  }), { info: {} })
  .add('Error', () => ({
    components: { ALabel },
    props: {
      label: { default: text('テキスト', 'ラベル') },
      span: { default: boolean('span要素', false) }
    },
    template: `
      <ALabel :span="span" error>{{ label }}</ALabel>
    `
  }), { info: {} })

