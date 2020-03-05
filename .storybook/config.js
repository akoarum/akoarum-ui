import { configure, addDecorator, addParameters } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Vue from 'vue'
import Decorator from './Decorator.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

addDecorator(() => ({
  components: { Decorator },
  template: `
    <Decorator>
      <story slot="story" />
    </Decorator>
  `
}))

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#333' }
  ]
})

const context = require.context('../src/', true, /^.*?\.stories\.ts?$/)

function loadStories() {
  context.keys().forEach(filename => {
    context(filename)
  })
}

configure(loadStories, module)
