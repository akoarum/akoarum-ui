import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ALayer from './ALayer.vue'

describe('ALayer', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ALayer, {
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
  })

  describe('event', () => {
    it('要素をクリックするとclickイベントを通知する', () => {
      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
