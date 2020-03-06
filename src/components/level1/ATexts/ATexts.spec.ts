import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import ATexts from './ATexts.vue'

describe('ATexts', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(ATexts, {
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

  describe('見た目の制御', () => {
    it('styled: propsで指定したサイズ・行間で表示できる', () => {
      wrapper.setProps({ size: '18', lineHeight: '2' })
      expect(wrapper.vm.styled).toEqual({
        '--size': '18px',
        '--lineHeight': '2'
      })
    })

    it('styledClasses: propsで指定した色に変更できる', () => {
      wrapper.setProps({ caution: true })
      expect(wrapper.vm.styledClasses).toEqual(['-caution'])
      wrapper.setProps({ caution: false, note: true })
      expect(wrapper.vm.styledClasses).toEqual(['-note'])
    })
  })
})
