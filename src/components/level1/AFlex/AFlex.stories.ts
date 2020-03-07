import { storiesOf } from '@storybook/vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AFlex from './AFlex.vue'

storiesOf('level1/AFlex', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { AFlex },
    props: {
      tag: { default: text('Tag', 'div') },
      direction: { default: text('flex-direction', '') },
      justifyContent: { default: text('justify-content', '') },
      alignItems: { default: text('align-items', '') },
      alignContent: { default: text('align-content', '') },
      wrap: { default: boolean('flex-wrap', true) }
    },
    template: `
      <AFlex
        :tag="tag"
        :direction="direction"
        :justify-content="justifyContent"
        :align-items="alignItems"
        :align-content="alignContent"
        :wrap="wrap"
      >
        <div style="width: 48%; background: #f0f0f0;">テキスト</div>
        <div style="width: 48%; background: #f0f0f0;">テキスト</div>
      </AFlex>
    `
  }), { info: {} })
