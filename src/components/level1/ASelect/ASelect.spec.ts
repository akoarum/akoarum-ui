import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ASelect from './ASelect.vue'

describe('ASelect', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ASelect, {
      propsData: {
        value: '',
        items: [
          { id: 1, label: '項目1', value: 1 },
          { id: 2, label: '項目2', value: 2 },
          { id: 3, label: '項目3', value: 3 }
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

    it('styled: propsで幅を指定できる', () => {
      wrapper.setProps({ width: '120px' })
      expect(wrapper.vm.styled).toEqual({
        '--width': '120px'
      })
    })

    it('handleFocus: フォーカスイベントを通知する', () => {
      wrapper.find('select').trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('handleBlur: フォーカスが外れたことを通知する', () => {
      wrapper.find('select').trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })
  })
})
