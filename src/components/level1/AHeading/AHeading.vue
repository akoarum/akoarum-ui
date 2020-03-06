<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { defineComponent, computed } from '@vue/composition-api'

interface Props {
  level: number
  visual: number
}

export default defineComponent({
  props: {
    level: { type: Number, default: 2 },
    visual: { type: Number, default: 2 }
  },
  setup(props: Props) {
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = ['aHeading']
      classes.push(`-lv${props.visual}`)
      return classes
    })

    return { styledClasses }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      `h${this.level}`,
      {
        class: this.styledClasses
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.aHeading {
  &.-lv1 {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.2;
  }
  &.-lv2 {
    font-size: 2.9rem;
    font-weight: bold;
    line-height: 1.3;
  }
  &.-lv3 {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.4;
  }
  &.-lv4 {
    font-size: 2.1rem;
    font-weight: bold;
    line-height: 1.4;
  }
  &.-lv5 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.6;
  }
  &.-lv6 {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.9;
  }
}
</style>
