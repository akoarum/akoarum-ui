import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AInput from './AInput.vue'

describe('AInput', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AInput, {
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

    it('styled: propsで幅をセットできる', () => {
      wrapper.setProps({ width: '100%' })
      expect(wrapper.vm.styled).toEqual({ '--width': '100%' })
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
