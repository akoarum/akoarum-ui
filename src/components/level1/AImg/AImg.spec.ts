import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import AImg from './AImg.vue'

describe('AImg', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(AImg, {
      propsData: {
        src: 'https://dummyimage.com/300x200/ccc/fff.png',
        srcset: 'https://dummyimage.com/600x400/ccc/fff.png 2x, https://dummyimage.com/300x200/ccc/fff.png 1x',
        alt: '代替テキスト'
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
  })
})
