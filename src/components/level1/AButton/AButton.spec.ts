import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AButton from './AButton.vue'

describe('AButton', () => {
  const localVue = createLocalVue()
  let wrapper: any

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AButton, {
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

    it('toがセットされていない場合はボタンになる', () => {
      expect(wrapper.is('button')).toBe(true)
    })

    it('propsで見た目を制御することができる', () => {
      wrapper.setProps({
        primary: true,
        outline: true
      })
      expect(wrapper.vm.styledClasses).toEqual(['aButton', '-primary', '-outline'])
    })
  })

  describe('event', () => {
    it('ボタンをクリックすると親にイベントを伝播する', () => {
      wrapper.trigger('click')
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
