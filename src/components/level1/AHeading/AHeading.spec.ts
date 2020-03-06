import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AHeading from './AHeading.vue'

describe('AHeading', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AHeading, {
      propsData: {
        level: 3
      },
      slots: {
        default: '見出しテキスト'
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

    it('levelで指定した要素レベルでレンダリングする', () => {
      expect(wrapper.is('h3')).toBe(true)
    })

    it('styledClasses: visualで指定したレベルの見た目になる', () => {
      wrapper.setProps({ visual: 4 })
      expect(wrapper.vm.styledClasses).toEqual(['aHeading', '-lv4'])
    })
  })
})
