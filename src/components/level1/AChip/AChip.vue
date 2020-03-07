<template>
  <i :class="styledClasses" class="aChip"><slot /></i>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  small?: boolean
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
  caution?: boolean
}

export default defineComponent({
  props: {
    small: { type: Boolean },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    tertiary: { type: Boolean },
    caution: { type: Boolean }
  },
  setup(props: Props) {
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = []
      if (props.small) classes.push('-small')
      if (props.primary) classes.push('-primary')
      if (props.secondary) classes.push('-secondary')
      if (props.tertiary) classes.push('-tertiary')
      if (props.caution) classes.push('-caution')
      return classes
    })

    return { styledClasses }
  }
})
</script>

<style lang="scss" scoped>
.aChip {
  display: inline-block;
  border-radius: 3px;
  padding: 5px 8px 4px;
  background: #acaeaf;
  font-size: 12px;
  line-height: 1;
  color: #fff;

  &.-small {
    border-radius: 0;
    padding: 4px 6px 3px;
    font-size: 10px;
    font-weight: bold;
  }
  &.-primary {
    background: $color-primary;
  }
  &.-secondary {
    background: #6fcf97;
  }
  &.-caution {
    background: #e37070;
  }
}
</style>
