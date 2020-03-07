import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import ACheckboxes from './ACheckboxes.vue'

storiesOf('level1/ACheckboxes', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { ACheckboxes },
    data() {
      return {
        value: [],
        items: [
          { id: 0, label: '項目1', value: 1 },
          { id: 1, label: '項目2', value: 2 },
          { id: 2, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ACheckboxes v-model="value" :items="items" name="checkbox" />
    `
  }), { info: {} })
  .add('Error', () => ({
    components: { ACheckboxes },
    data() {
      return {
        value: [],
        items: [
          { id: 0, label: '項目1', value: 1 },
          { id: 1, label: '項目2', value: 2 },
          { id: 2, label: '項目3', value: 3 }
        ]
      }
    },
    template: `
      <ACheckboxes v-model="value" :items="items" name="checkbox" aria-invalid="true" />
    `
  }), { info: {} })
