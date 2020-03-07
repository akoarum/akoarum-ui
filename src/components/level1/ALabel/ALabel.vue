<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  error: boolean
  span: boolean
}

export default defineComponent({
  props: {
    error: { type: Boolean },
    span: { type: Boolean }
  },
  setup(props: Props) {
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = ['aLabel']
      if (props.error) classes.push('-error')
      return classes
    })
    return { styledClasses }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.span ? 'span' : 'label',
      {
        class: this.styledClasses
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.aLabel {
  font-size: 14px;
  font-weight: bold;

  &.-error {
    color: $color-caution;
  }
}
</style>
