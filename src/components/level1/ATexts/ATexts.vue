<template>
  <p :style="styled" :class="styledClasses" class="aTexts"><slot /></p>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  size: string
  lineHeight: string
  caution?: boolean
  note?: boolean
}

export default defineComponent({
  props: {
    size: { type: String, default: '16' },
    lineHeight: { type: String, default: '1.9' },
    caution: { type: Boolean },
    note: { type: Boolean }
  },
  setup(props: Props) {
    const styled = computed<{ [key: string]: string }>(() => {
      return {
        '--size': `${props.size}px`,
        '--lineHeight': props.lineHeight
      }
    })
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = []
      if (props.caution) classes.push('-caution')
      if (props.note) classes.push('-note')
      return classes
    })

    return { styled, styledClasses }
  }
})
</script>

<style lang="scss" scoped>
.aTexts {
  --size: 16px;
  --lineHeight: 1.9;
  font-size: var(--size);
  line-height: var(--lineHeight);
  white-space: pre-line;

  &.-caution {
    color: $color-caution;
  }
  &.-note {
    color: #888;
  }
}
</style>
