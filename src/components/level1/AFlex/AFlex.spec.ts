import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AFlex from './AFlex.vue'

describe('AFlex', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AFlex, {
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

    it('styled: スタイルはpropsで制御できる', () => {
      wrapper.setProps({
        justifyContent: 'space-between',
        wrap: true
      })
      expect(wrapper.vm.styled).toEqual({
        'justify-content': 'space-between',
        'flex-wrap': 'wrap'
      })
    })
  })
})
