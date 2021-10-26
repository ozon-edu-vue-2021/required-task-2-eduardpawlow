<template>
  <div
    class="dir-item dir-item--file"
    :class="{ 'dir-item--selected': isSelected }"
    @click="onClick"
  >
    <div class="dir-item__title">{{ name }}</div>
  </div>
</template>

<script>
import dirItemMixin from "../../../mixins/dirItem";

export default {
  name: "directory-file",
  mixins: [dirItemMixin],
};
</script>

<style scoped src="../styles.css"></style>
