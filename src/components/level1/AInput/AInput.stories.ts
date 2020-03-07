import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AInput from './AInput.vue'

storiesOf('level1/AInput', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { AInput },
    props: {
      type: { default: text('Type', 'text') },
      width: { default: text('Width', 'auto') }
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <AInput v-model="value" :type="type" :width="width" @focus="focus" @blur="blur" />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur')
    }
  }), { info: {} })
  .add('Error', () => ({
    components: { AInput },
    props: {
      type: { default: text('Type', 'text') },
      width: { default: text('Width', 'auto') }
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <AInput v-model="value" :type="type" :width="width" aria-invalid="true" @focus="focus" @blur="blur" />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur')
    }
  }), { info: {} })
