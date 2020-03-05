---
to: src/components/<%= category %>/<%= name %>/<%= name %>.vue
---
<template>
  <div class="<%= h.changeCase.camelCase(name) %>"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.<%= h.changeCase.camelCase(name) %> {
}
</style>
