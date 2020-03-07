import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ALayer from './ALayer.vue'

storiesOf('level1/ALayer', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ALayer },
    template: `
      <ALayer :style="{ width: '150px', height: '150px' }" @click="click" />
    `,
    methods: {
      click: action('click')
    }
  }), { info: {} })
