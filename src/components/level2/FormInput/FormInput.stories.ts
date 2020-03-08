import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import FormInput from './FormInput.vue'

storiesOf('level2/FormInput', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { FormInput },
    props: {
      type: { default: select('type属性値', {
        text: 'text',
        number: 'number',
        email: 'email',
        tel: 'tel',
        password: 'password'
      }, 'text') },
      min: { default: text('min', '') },
      max: { default: text('max', '') },
      minlength: { default: text('minlength', '') },
      maxlength: { default: text('maxlength', '') },
      required: { default: boolean('必須項目', true) },
      placeholder: { default: text('プレスホルダー', '') },
      width: { default: text('width', '') },
    },
    data() {
      return {
        value: ''
      }
    },
    template: `
      <FormInput
        v-model="value"
        :type="type"
        :min="min ? Number(min) : null"
        :max="max ? Number(max) : null"
        :minlength="minlength ? Number(minlength) : null"
        :maxlength="maxlength ? Number(maxlength) : null"
        :placeholder="placeholder"
        :required="required"
        :width="width"
        name="name"
        @focus="focus"
        @blur="blur"
        @error="error"
        @dirty="dirty"
      />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur'),
      error: action('error'),
      dirty: action('dirty')
    }
  }), { info: {} })
