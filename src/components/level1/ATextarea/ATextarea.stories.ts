import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ATextarea from './ATextarea.vue'

storiesOf('level1/ATextarea', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ATextarea },
    props: {
      width: { default: text('幅', 'auto') },
      height: { default: text('高さ', '120px') }
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <ATextarea v-model="value" :width="width" :height="height" @focus="focus" @blur="blur" />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur')
    }
  }), { info: {} })
  .add('Error', () => ({
    components: { ATextarea },
    props: {
      width: { default: text('幅', 'auto') },
      height: { default: text('高さ', '160px') }
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <ATextarea
        v-model="value"
        :width="width"
        :height="height"
        aria-invalid="true"
        @focus="focus"
        @blur="blur"
      />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur')
    }
  }), { info: {} })
