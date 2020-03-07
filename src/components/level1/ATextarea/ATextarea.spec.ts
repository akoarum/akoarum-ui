import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ATextarea from './ATextarea.vue'

describe('ATextarea', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ATextarea, {
      propsData: {
        value: ''
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

    it('styled: propsで幅と高さをセットできる', () => {
      wrapper.setProps({ width: '100%', height: '140px' })
      expect(wrapper.vm.styled).toEqual({ '--width': '100%', '--height': '140px' })
    })
  })

  describe('event', () => {
    it('handleFocus: フォーカスイベントを通知する', () => {
      wrapper.vm.handleFocus()
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('handleBlur: フォーカスが外れたことを通知する', () => {
      wrapper.vm.handleBlur()
      expect(wrapper.emitted().blur).toBeTruthy()
    })
  })
})
