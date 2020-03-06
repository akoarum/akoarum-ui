import { storiesOf } from '@storybook/vue'
import { withKnobs, number, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AHeading from './AHeading.vue'

storiesOf('level1/AHeading', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('VisualLevel1', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="1">{{ texts }}</AHeading>
    `
  }), { info: {} })
  .add('VisualLevel2', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="2">{{ texts }}</AHeading>
    `
  }), { info: {} })
  .add('VisualLevel3', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="3">{{ texts }}</AHeading>
    `
  }), { info: {} })
  .add('VisualLevel4', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="4">{{ texts }}</AHeading>
    `
  }), { info: {} })
  .add('VisualLevel5', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="5">{{ texts }}</AHeading>
    `
  }), { info: {} })
  .add('VisualLevel6', () => ({
    components: { AHeading },
    props: {
      level: { default: number('要素レベル', 1) },
      texts: { default: text('テキスト', '吾輩は猫である') }
    },
    template: `
      <AHeading :level="level" :visual="6">{{ texts }}</AHeading>
    `
  }), { info: {} })
