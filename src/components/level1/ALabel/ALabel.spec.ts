import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ALabel from './ALabel.vue'

describe('ALabel', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ALabel, {
      propsData: {},
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

    it('styledClasses: propsから見た目を制御できる', () => {
      wrapper.setProps({ error: true })
      expect(wrapper.vm.styledClasses).toEqual(['aLabel', '-error'])
    })
  })
})
