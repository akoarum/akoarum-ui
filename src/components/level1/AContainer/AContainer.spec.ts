import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AContainer from './AContainer.vue'

describe('AContainer', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AContainer, {
      propsData: {},
      slots: {
        default: 'テキスト'
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

    it('styled: padding、backgroundはpropsから設定できる', () => {
      wrapper.setProps({ padding: '10px', background: '#f0f0f0' })
      expect(wrapper.vm.styled).toEqual({
        '--padding': '10px',
        '--background': '#f0f0f0'
      })
    })
  })
})
