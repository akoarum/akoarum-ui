<template>
  <div class="decorator">
    <slot name="story" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Decorator'
})
</script>

<style lang="scss">
</style>
