import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ARadios from './ARadios.vue'

describe('ARadios', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ARadios, {
      propsData: {
        name: 'radio',
        value: '',
        items: [
          { id: 0, label: '項目1', value: 1 },
          { id: 1, label: '項目2', value: 2 },
          { id: 2, label: '項目3', value: 3 }
        ]
      },
      localVue
    })
  })

  describe('initialized', () => {
    it('mountable', () => {
      expect(wrapper.isVueInstance()).toBe(true)
    })
    it('snapshot', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
