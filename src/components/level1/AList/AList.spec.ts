import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AList from './AList.vue'

describe('AList', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AList, {
      propsData: {
        items: [
          { id: 0, text: 'アメリカンショートヘア' },
          { id: 1, text: 'マンチカン' },
          { id: 2, text: 'ノルウェイジャンフォレストキャット' },
          { id: 3, text: 'スコティッシュフォールド' }
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

    it('styledClasses: 見た目はpropで制御できる', () => {
      wrapper.setProps({ visualOrdered: true })
      expect(wrapper.vm.styledClasses).toEqual(['aList', '-ordered'])
    })
  })
})
