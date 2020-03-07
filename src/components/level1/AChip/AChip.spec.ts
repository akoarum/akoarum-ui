import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AChip from './AChip.vue'

describe('AChip', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AChip, {
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

    it('styledClasses: propsによって見た目を制御できる', () => {
      wrapper.setProps({ small: true, tertiary: true })
      expect(wrapper.vm.styledClasses).toEqual(['-small', '-tertiary'])
    })
  })
})
