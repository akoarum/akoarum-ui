import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ARadios from './ARadios.vue'

storiesOf('level1/ARadios', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ARadios },
    data() {
      return {
        value: '',
        items: [
          { id: 0, label: '項目1', value: 1 },
          { id: 1, label: '項目2', value: 2 },
          { id: 2, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ARadios v-model="value" :items="items" name="radio" />
    `
  }), { info: {} })
  .add('Error', () => ({
    components: { ARadios },
    data() {
      return {
        value: '',
        items: [
          { id: 0, label: '項目1', value: 1 },
          { id: 1, label: '項目2', value: 2 },
          { id: 2, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ARadios v-model="value" :items="items" name="radio" aria-invalid="true" />
    `
  }), { info: {} })
