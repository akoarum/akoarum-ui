<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  tag: string
  direction?: string
  justifyContent?: string
  alignItems?: string
  alignContent?: string
  wrap?: boolean
}

export default defineComponent({
  props: {
    tag: { type: String, default: 'div' },
    direction: { type: String },
    justifyContent: { type: String },
    alignItems: { type: String },
    alignContent: { type: String },
    wrap: { type: Boolean }
  },
  setup(props: Props) {
    const styled = computed<{ [key: string]: string }>(() => {
      const styles: { [key: string]: string } = {}
      if (props.direction) styles['flex-direction'] = props.direction
      if (props.justifyContent) styles['justify-content'] = props.justifyContent
      if (props.alignItems) styles['align-items'] = props.alignItems
      if (props.alignContent) styles['align-content'] = props.alignContent
      if (props.wrap) styles['flex-wrap'] = props.wrap ? 'wrap' : 'nowrap'
      return styles
    })
    return { styled }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,
      {
        class: 'aFlex',
        style: this.styled
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.aFlex {
  display: flex;
}
</style>
