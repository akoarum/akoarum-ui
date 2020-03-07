import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ASelect from './ASelect.vue'
import { action } from '@storybook/addon-actions'

storiesOf('level1/ASelect', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ASelect },
    props: {
      placeholder: { default: text('プレスホルダー', '選択してください') },
      width: { default: text('幅', 'auto') }
    },
    data() {
      return {
        value: '',
        items: [
          { id: 1, label: '項目1', value: 1 },
          { id: 2, label: '項目2', value: 2 },
          { id: 3, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ASelect
        v-model="value"
        :items="items"
        :placeholder="placeholder"
        :width="width"
        @focus="focus"
        @blur="blur"
      />
    `,
    methods: {
      focus: action('focus'),
      blur: action('blur')
    }
  }), { info: {} })
  .add('Error', () => ({
    components: { ASelect },
    props: {
      placeholder: { default: text('プレスホルダー', '選択してください') },
      width: { default: text('幅', 'auto') }
    },
    data() {
      return {
        value: '',
        items: [
          { id: 1, label: '項目1', value: 1 },
          { id: 2, label: '項目2', value: 2 },
          { id: 3, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ASelect
        v-model="value"
        :items="items"
        :placeholder="placeholder"
        :width="width"
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
