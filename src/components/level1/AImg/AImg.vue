<template>
  <img :src="src" :srcset="srcset" :alt="alt" class="aImg" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    srcset: { type: String }
  }
})
</script>

<style lang="scss" scoped>
.aImg {
}
</style>
