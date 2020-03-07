import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import AImg from './AImg.vue'

storiesOf('level1/AImg', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Normal', () => ({
    components: { AImg },
    props: {
      src: { default: text('src', 'https://dummyimage.com/300x200/ccc/fff.png') },
      alt: { default: text('alt', '') },
      srcset: { default: text('srcset', '') },
    },
    template: `
      <AImg :src="src" :srcset="srcset" :alt="alt" />
    `
  }), { info: {} })
