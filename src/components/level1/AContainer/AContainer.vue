<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  tag: string
  padding: string
  background?: string
}

export default defineComponent({
  props: {
    tag: { type: String, default: 'div' },
    padding: { type: String },
    background: { type: String }
  },
  setup(props: Props) {
    const styled = computed<{ [key: string]: string }>(() => {
      const styles: { [key: string]: string } = {}
      if (props.padding) styles['--padding'] = props.padding
      if (props.background) styles['--background'] = props.background
      return styles
    })

    return { styled }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.tag,
      {
        class: 'aContainer',
        style: this.styled
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.aContainer {
  --padding: 14px 16px;
  --background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  padding: var(--padding);
  background: var(--background);
}
</style>
