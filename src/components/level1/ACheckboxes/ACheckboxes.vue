<template>
  <ul class="aCheckboxes">
    <template v-for="item in items">
      <li :key="item.id" class="aCheckboxes__item">
        <label class="aCheckboxes__label">
          <input
            v-model="valueModel"
            v-bind="$attrs"
            :name="name"
            :value="item.value"
            type="checkbox"
            class="aCheckboxes__input"
          />
          <span class="aCheckboxes__text">{{ item.label }}</span>
        </label>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext } from '@vue/composition-api'
import { FormOption } from '~/types/FormOption'

interface Props {
  name: string
  items: FormOption[]
  value: (string | number)[]
}

export default defineComponent({
  inheritAttrs: false,
  model: {
    event: 'change'
  },
  props: {
    name: { type: String, required: true },
    items: { type: Array, required: true },
    value: { type: Array, required: true }
  },
  setup(props: Props, context: SetupContext) {
    const valueModel = computed({
      get: (): (string | number)[] => props.value,
      set: (newValue: (string | number)[]) => {
        context.emit('change', newValue)
      }
    })

    return { valueModel }
  }
})
</script>

<style lang="scss" scoped>
.aCheckboxes__item {
  font-size: 15px;
}

.aCheckboxes__item + .aCheckboxes__item {
  margin-top: 8px;
}

.aCheckboxes__label {
  position: relative;
  display: inline-block;
  padding-left: 24px;
}

.aCheckboxes__input {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 4px;
  opacity: 0;

  &:checked + .aCheckboxes__text {
    &::before {
      border-color: $color-primary;
      background: $color-primary;
    }

    &::after {
      opacity: 1;
    }
  }
  &[aria-invalid] + .aCheckboxes__text {
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

.aCheckboxes__text {
  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  &::before {
    top: 2px;
    left: 0;
    border: 2px solid $color-base;
    width: 14px;
    height: 14px;
    background: #fff;
    transition: border $duration $easing, background $duration $easing;
  }

  &::after {
    top: 3px;
    left: 1px;
    content: 'check';
    font-family: 'Material Icons';
    font-size: 16px;
    color: #fff;
    opacity: 0;
    transition: opacity $duration $easing;
  }
}
</style>
