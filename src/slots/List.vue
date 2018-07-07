<template lang='pug'>
  div
    slot(v-for="item in items" :item="item")
      <!-- fallback content here -->

</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style>
</style>