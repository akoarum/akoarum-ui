<template>
  <textarea
    v-model="valueModel"
    :style="styled"
    class="aTextarea"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'

interface Props {
  value: string
  width: string
  height: string
}

export default defineComponent({
  props: {
    value: { type: String, required: true },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '160px' }
  },
  setup(props: Props, context: SetupContext) {
    const styled = computed<{ [key: string]: string }>(() => {
      return {
        '--width': props.width,
        '--height': props.height
      }
    })
    const valueModel = computed({
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

    return { styled, valueModel, handleFocus, handleBlur }
  }
})
</script>

<style lang="scss" scoped>
.aTextarea {
  --width: auto;
  --height: 160px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid $color-border;
  box-shadow: none;
  padding: 8px 12px 9px;
  width: var(--width);
  height: var(--height);
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
