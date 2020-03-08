import { computed, reactive, toRefs, SetupContext } from '@vue/composition-api'
import { FORM_VALIDATE_ERRORS } from '~/utils/variables'

export const useFormValidation = (props, context: SetupContext, useChange = false) => {
  const state = reactive({
    error: '',
    isDirty: !props.required || props.value ? true : false
  })
  const validation = (value: string): string => {
    if (!state.isDirty) return ''
    if (!value && props.required) return FORM_VALIDATE_ERRORS.REQUIRED
    if (!useChange) {
      if (
        props.type === 'email' &&
        !FORM_VALIDATE_ERRORS.EMAIL.regex.test(value)
      ) {
        return FORM_VALIDATE_ERRORS.EMAIL.message
      }
      if (props.type === 'tel' && !FORM_VALIDATE_ERRORS.TEL.regex.test(value)) {
        return FORM_VALIDATE_ERRORS.TEL.message
      }
      if (props.type === 'number') {
        if (props.min && Number(value) < props.min) {
          return `${props.min}以上にしてください。`
        }
        if (props.max && Number(value) > props.max) {
          return `${props.max}以下にしてください。`
        }
      } else {
        if (props.minlength && value.length < Number(props.minlength)) {
          return `${props.minlength}文字以上入力してください。`
        }
        if (props.maxlength && value.length > Number(props.maxlength)) {
          return `${props.maxlength}文字以下にしてください。`
        }
      }
    } else {
      if (props.min && value.length < props.min) {
        return `${props.min}個以上選択してください。`
      }
      if (props.max && value.length > props.max) {
        return `選択できるのは${props.min}個までです。`
      }
    }

    return ''
  }
  const valueModel = computed({
    get: (): string => props.value,
    set: (newValue: string) => {
      state.error = validation(newValue)
      if (useChange) {
        context.emit('change', newValue)
      } else {
        context.emit('input', newValue)
      }
    }
  })
  const handleFocus = () => {
    context.emit('focus')
  }
  const handleBlur = () => {
    context.emit('blur')

    if (!state.isDirty && valueModel) {
      state.isDirty = true
    }
  }

  return {
    ...toRefs(state),
    validation,
    valueModel,
    handleFocus,
    handleBlur
  }
}
