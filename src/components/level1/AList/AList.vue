<script lang="ts">
import { CreateElement, VNode, PropType } from 'vue'
import { defineComponent, computed } from '@vue/composition-api'
import { ListItem } from '~/types/ListItem'

interface Props {
  items: ListItem[]
  ordered: boolean
  visualOrdered: boolean
}

export default defineComponent({
  props: {
    items: { type: Array as PropType<ListItem[]>, required: true },
    ordered: { type: Boolean },
    visualOrdered: { type: Boolean }
  },
  setup(props: Props) {
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = ['aList']
      if (props.visualOrdered) classes.push('-ordered')
      return classes
    })

    return { styledClasses }
  },
  render(createElement: CreateElement): VNode {
    const Items = this.items.map(item =>
      createElement(
        'li',
        {
          class: 'aList__item',
          props: {
            key: item.id
          }
        },
        item.text
      )
    )
    return createElement(
      this.ordered ? 'ol' : 'ul',
      {
        class: this.styledClasses
      },
      Items
    )
  }
})
</script>

<style lang="scss" scoped>
.aList {
  counter-reset: item;
  font-size: 14px;
  line-height: 1.6;

  &.-ordered {
    .aList__item {
      padding-left: 18px;

      &::before {
        left: 0;
        top: 0;
        content: counter(item) '.';
        border-radius: 0;
        width: auto;
        height: auto;
        background: transparent;
      }
    }
  }
}

.aList__item {
  counter-increment: item;
  position: relative;
  padding-left: 16px;

  &::before {
    position: absolute;
    left: 2px;
    top: 0.6em;
    content: '';
    border-radius: 50%;
    width: 5px;
    height: 5px;
    background: $color-primary;
  }
}

.aList__item + .aList__item {
  margin-top: 4px;
}
</style>
