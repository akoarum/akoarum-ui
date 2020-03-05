<script lang="ts">
import { VNode, CreateElement } from 'vue'
import { defineComponent, computed, SetupContext } from '@vue/composition-api'

interface Props {
  to?: string
  primary?: boolean
  secondary?: boolean
  caution?: boolean
  outline?: boolean
  small?: boolean
  large?: boolean
}

export default defineComponent({
  props: {
    to: { type: String },
    primary: { type: Boolean },
    secondary: { type: Boolean },
    caution: { type: Boolean },
    outline: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean }
  },
  setup(props: Props, context: SetupContext) {
    const styledClasses = computed<string[]>(() => {
      const classes: string[] = ['aButton']
      if (props.primary) classes.push('-primary')
      if (props.secondary) classes.push('-secondary')
      if (props.caution) classes.push('-caution')
      if (props.outline) classes.push('-outline')
      if (props.small) classes.push('-small')
      if (props.large) classes.push('-large')
      return classes
    })
    const handleClick = () => {
      context.emit('click')
    }

    return { styledClasses, handleClick }
  },
  render(createElement: CreateElement): VNode {
    return createElement(
      this.to ? 'router-link' : 'button',
      {
        class: this.styledClasses,
        props: {
          to: this.to || ''
        },
        on: {
          click: this.handleClick
        }
      },
      this.$slots.default
    )
  }
})
</script>

<style lang="scss" scoped>
.aButton {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 12px 18px;
  min-width: 128px;
  background: #acaeaf;
  font-size: $fontSize-pc;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  transition: background 0.3s $easing;

  &:hover,
  &:focus {
    background: #bcbdbd;
  }

  &.-small {
    padding: 10px 16px;
    min-width: 0;

    &.-outline {
      padding: 9px 15px;
    }
  }

  &.-large {
    border-radius: 3px;
    padding: 15px 18px;
    min-width: 258px;
    font-weight: bold;

    &.-outline {
      padding: 14px 17px;
    }
  }

  &.-outline {
    border: 1px solid currentColor;
    padding: 11px 17px;
    background: transparent;
    color: #acaeaf;

    &:hover,
    &:focus {
      background: rgba(172, 174, 175, 0.15);
    }
  }

  &.-primary {
    background: $color-primary;

    &:hover,
    &:focus {
      background: #3fa3de;
    }

    &.-outline {
      background: transparent;
      color: $color-primary;

      &:hover,
      &:focus {
        background: rgba(37, 141, 202, 0.08);
      }
    }
  }
  &.-secondary {
    background: $color-secondary;

    &:hover,
    &:focus {
      background: #60e477;
    }

    &.-outline {
      background: transparent;
      color: $color-secondary;

      &:hover,
      &:focus {
        background: rgba(76, 217, 100, 0.08);
      }
    }
  }
  &.-caution {
    background: $color-caution;

    &:hover,
    &:focus {
      background: #ef2c2c;
    }

    &.-outline {
      background: transparent;
      color: $color-caution;

      &:hover,
      &:focus {
        background: rgba(197, 12, 12, 0.06);
      }
    }
  }
}
</style>
