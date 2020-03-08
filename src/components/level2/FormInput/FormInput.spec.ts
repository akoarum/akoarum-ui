import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import FormInput from './FormInput.vue'
import { FORM_VALIDATE_ERRORS } from '~/utils/variables'

describe('FormInput', () => {
  const localVue = createLocalVue()
  let wrapper

  localVue.use(VueCompositionApi)

  beforeEach(() => {
    wrapper = shallowMount(FormInput, {
      propsData: {
        name: 'name',
        value: '',
        type: 'text'
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

  describe('event', () => {
    it('フォーカス時に親に通知する', () => {
      wrapper.vm.handleFocus()
      expect(wrapper.emitted().focus).toBeTruthy()
    })

    it('フォーカスが外れたことを通知する', () => {
      wrapper.vm.handleBlur()
      expect(wrapper.emitted().blur).toBeTruthy()
    })
  })

  describe('validation', () => {
    it('requiredで未入力の場合は未入力エラーになる', () => {
      wrapper.setProps({ required: true })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('')).toBe(FORM_VALIDATE_ERRORS.REQUIRED)
    })

    it('type: emailでメールアドレスの形式になっていなければエラーになる', () => {
      wrapper.setProps({ type: 'email' })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('aaa')).toBe(FORM_VALIDATE_ERRORS.EMAIL.message)
    })

    it('type: telで電話番号の形式になっていなければエラーになる', () => {
      wrapper.setProps({ type: 'tel' })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('111')).toBe(FORM_VALIDATE_ERRORS.TEL.message)
    })

    it('type: numberでminより下になっていたらエラーになる', () => {
      wrapper.setProps({ type: 'number', min: 10 })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('1')).toBe('10以上にしてください。')
    })

    it('type: numberでmaxより上になっていたらエラーになる', () => {
      wrapper.setProps({ type: 'number', max: 10 })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('11')).toBe('10以下にしてください。')
    })

    it('文字数がminlengthより少なかったらエラーになる', () => {
      wrapper.setProps({ minlength: 10 })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('a')).toBe('10文字以上入力してください。')
    })

    it('文字数がmaxlengthより多かったらエラーになる', () => {
      wrapper.setProps({ maxlength: 4 })
      wrapper.setData({ isDirty: true })
      expect(wrapper.vm.validation('aaaaa')).toBe('4文字以下にしてください。')
    })
  })
})
