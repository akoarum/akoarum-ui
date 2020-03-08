<template>
  <div class="formInput">
    <AInput
      v-model="valueModel"
      v-bind="$attrs"
      :id="name"
      :type="type"
      :name="name"
      :required="required"
      :min="min"
      :max="max"
      :minlength="minlength"
      :maxlength="maxlength"
      :aria-invalid="String(!!error)"
      :aria-describedby="error ? `${name}-error` : false"
      :width="width"
      class="formInput__input"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <template v-if="error">
      <ATexts
        :id="`${name}-error`"
        :aria-live="error ? 'assertive' : 'off'"
        role="alert"
        size="14"
        class="formInput__error"
        caution
      >
        <span>{{ error }}</span>
      </ATexts>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  onMounted,
  SetupContext
} from '@vue/composition-api'
import { useFormValidation } from '~/compositions/useFormValidation'
import { ATexts, AInput } from '~/components/level1'

interface Props {
  name: string
  value: string
  type: string
  width?: string
  required?: boolean
  min?: number
  max?: number
  minlength?: number
  maxlength?: number
}

interface State {
  error: string
  isDirty: boolean
}

export default defineComponent({
  inheritAttrs: false,
  components: { ATexts, AInput },
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true },
    required: { type: Boolean },
    min: { type: Number },
    max: { type: Number },
    minlength: { type: Number },
    maxlength: { type: Number },
    width: { type: String }
  },
  setup(props: Props, context: SetupContext) {
    const {
      error,
      isDirty,
      validation,
      valueModel,
      handleFocus,
      handleBlur
    } = useFormValidation(props, context)

    onMounted(() => {
      if (props.value) {
        error.value = validation(props.value)
      }
    })

    watch(error, () => {
      context.emit('error', !!error)
    })

    watch(isDirty, () => {
      context.emit('dirty', true)
      error.value = validation(props.value)
    })

    return { error, isDirty, validation, valueModel, handleFocus, handleBlur }
  }
})
</script>

<style lang="scss" scoped>
.formInput__error {
  margin-top: 5px;
}
</style>
