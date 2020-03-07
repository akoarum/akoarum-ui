<template>
  <ul class="aRadios">
    <template v-for="item in items">
      <li :key="item.id" class="aRadios__item">
        <label class="aRadios__label">
          <input
            v-model="valueModel"
            v-bind="$attrs"
            :name="name"
            :value="item.value"
            type="radio"
            class="aRadios__input"
          />
          <span class="aRadios__text">{{ item.label }}</span>
        </label>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'
import { FormOption } from '~/types/FormOption'

interface Props {
  name: string | number
  items: FormOption[]
  value: string
}

export default defineComponent({
  inheritAttrs: false,
  model: {
    event: 'change'
  },
  props: {
    name: { type: String, required: true },
    items: { type: Array, required: true },
    value: { type: [String, Number], required: true }
  },
  setup(props: Props, context: SetupContext) {
    const valueModel = computed({
      get: (): string => props.value,
      set: (newValue: string) => {
        context.emit('change', newValue)
      }
    })

    return { valueModel }
  }
})
</script>

<style lang="scss" scoped>
.aRadios__item {
  font-size: 15px;
}

.aRadios__item + .aRadios__item {
  margin-top: 8px;
}

.aRadios__label {
  position: relative;
  display: inline-block;
  padding-left: 24px;
}

.aRadios__input {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 4px;
  opacity: 0;

  &:checked + .aRadios__text::after {
    opacity: 1;
  }
  &[aria-invalid] + .aRadios__text {
    color: $color-caution;

    &::before {
      border-color: $color-caution;
      background: #fff7f7;
    }

    &::after {
      background: $color-caution;
    }
  }
}

.aRadios__text {
  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  &::before {
    top: 2px;
    left: 0;
    border: 2px solid $color-base;
    width: 14px;
    height: 14px;
    background: #fff;
  }

  &::after {
    top: 7px;
    left: 5px;
    width: 8px;
    height: 8px;
    background: $color-primary;
    opacity: 0;
    transition: opacity $duration $easing;
  }
}
</style>
