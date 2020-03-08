import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AContainer from './AContainer.vue'

storiesOf('level1/AContainer', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { AContainer },
    props: {
      tag: { default: text('要素', 'div') },
      padding: { default: text('padding', '') },
      background: { default: color('背景色', '#fff') }
    },
    template: `
      <AContainer :tag="tag" :padding="padding" :background="background">
        <p>テキスト</p>
      </AContainer>
    `
  }), { info: {} })
