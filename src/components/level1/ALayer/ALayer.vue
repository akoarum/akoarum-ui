<template>
  <div class="aLayer" @click="handleClick" />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'

export default defineComponent({
  setup(_, context: SetupContext) {
    const handleClick = () => {
      context.emit('click')
    }

    return { handleClick }
  }
})
</script>

<style lang="scss" scoped>
.aLayer {
  background: rgba(0, 0, 0, 0.65);
}
</style>
