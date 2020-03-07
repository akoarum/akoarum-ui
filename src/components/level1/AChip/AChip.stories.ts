import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AChip from './AChip.vue'

storiesOf('level1/AChip', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { AChip },
    props: {
      small: { default: boolean('小', false) },
      texts: { default: text('テキスト', 'テキスト') }
    },
    template: `
      <AChip :small="small">{{ texts }}</AChip>
    `
  }), { info: {} })
  .add('Primary', () => ({
    components: { AChip },
    props: {
      small: { default: boolean('小', false) },
      texts: { default: text('テキスト', 'テキスト') }
    },
    template: `
      <AChip :small="small" primary>{{ texts }}</AChip>
    `
  }), { info: {} })
  .add('Secondary', () => ({
    components: { AChip },
    props: {
      small: { default: boolean('小', false) },
      texts: { default: text('テキスト', 'テキスト') }
    },
    template: `
      <AChip :small="small" secondary>{{ texts }}</AChip>
    `
  }), { info: {} })
  .add('Tertiary', () => ({
    components: { AChip },
    props: {
      small: { default: boolean('小', false) },
      texts: { default: text('テキスト', 'テキスト') }
    },
    template: `
      <AChip :small="small" tertiary>{{ texts }}</AChip>
    `
  }), { info: {} })
  .add('Caution', () => ({
    components: { AChip },
    props: {
      small: { default: boolean('小', false) },
      texts: { default: text('テキスト', 'テキスト') }
    },
    template: `
      <AChip :small="small" caution>{{ texts }}</AChip>
    `
  }), { info: {} })

