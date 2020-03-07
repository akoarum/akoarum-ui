<template>
  <div class="aSelect">
    <select
      v-model="valueModel"
      v-bind="$attrs"
      :style="styled"
      class="aSelect__input"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <option value="">{{ placeholder }}</option>
      <template v-for="item in items">
        <option :key="item.id" :value="item.value">{{ item.value }}</option>
      </template>
    </select>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { defineComponent, computed, SetupContext } from '@vue/composition-api'
import { FormOption } from '~/types/FormOption'

interface Props {
  items: FormOption[]
  value: string | number | null
  width?: string
}

export default defineComponent({
  model: {
    event: 'change'
  },
  props: {
    items: { type: Array as PropType<FormOption[]>, required: true },
    value: { required: true },
    placeholder: { type: String, default: '選択してください' },
    width: { type: String, default: 'auto' }
  },
  setup(props: Props, context: SetupContext) {
    const styled = computed<{ [key: string]: string }>(() => ({
      '--width': props.width
    }))
    const valueModel = computed({
      get: (): string | number => props.value,
      set: (newValue: string | number) => {
        context.emit('change', newValue)
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
.aSelect {
  position: relative;
  display: inline-block;
  --width: auto;

  &::after {
    position: absolute;
    right: 6px;
    top: 9px;
    content: 'keyboard_arrow_down';
    font-size: 20px;
    font-family: 'Material Icons';
  }
}

.aSelect__input {
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid $color-border;
  box-shadow: none;
  padding: 8px 38px 9px 12px;
  width: var(--width);
  font-size: 16px;
  line-height: 1.3;
  outline: none;
  transition: border $duration $easing, background $duration $easing;
  cursor: pointer;

  &[aria-invalid='true'] {
    border-color: $color-caution;
    background: #fff7f7;
  }

  &:focus {
    border-color: $color-primary;
  }
}
</style>
