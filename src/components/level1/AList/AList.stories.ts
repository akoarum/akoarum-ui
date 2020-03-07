import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AList from './AList.vue'

const items = [
  { id: 0, text: 'アメリカンショートヘア' },
  { id: 1, text: 'マンチカン' },
  { id: 2, text: 'ノルウェイジャンフォレストキャット' },
  { id: 3, text: 'スコティッシュフォールド' }
]

storiesOf('level1/AList', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Unordered', () => ({
    components: { AList },
    props: {
      ordered: { default: boolean('ol', false) }
    },
    data() {
      return {
        items
      }
    },
    template: `
      <AList :items="items" :ordered="ordered" />
    `
  }), { info: {} })
  .add('Ordered', () => ({
    components: { AList },
    props: {
      ordered: { default: boolean('ol', false) }
    },
    data() {
      return {
        items
      }
    },
    template: `
      <AList :items="items" :ordered="ordered" visual-ordered />
    `
  }), { info: {} })
