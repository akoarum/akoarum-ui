<template>
  <input
    v-model="modelValue"
    :style="styled"
    class="aInput"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'

interface Props {
  value: string
  width?: string
  error?: boolean
}

export default defineComponent({
  props: {
    value: { type: String, required: true },
    width: { type: String }
  },
  setup(props: Props, context: SetupContext) {
    const styled = computed<{ [key: string]: string }>(() => {
      const styles: { [key: string]: string } = {}
      if (props.width) styles['--width'] = props.width
      return styles
    })
    const modelValue = computed({
      get: (): string => props.value,
      set: (newValue: string) => {
        context.emit('input', newValue)
      }
    })
    const handleFocus = () => {
      context.emit('focus')
    }
    const handleBlur = () => {
      context.emit('blur')
    }

    return { styled, modelValue, handleFocus, handleBlur }
  }
})
</script>

<style lang="scss" scoped>
.aInput {
  --width: auto;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid $color-border;
  box-shadow: none;
  padding: 8px 12px 9px;
  width: var(--width);
  font-size: 16px;
  line-height: 1.3;
  outline: none;
  transition: border $duration $easing, background $duration $easing;

  &[aria-invalid='true'] {
    border-color: $color-caution;
    background: #fff7f7;
  }

  &:focus {
    border-color: $color-primary;
  }
}
</style>
