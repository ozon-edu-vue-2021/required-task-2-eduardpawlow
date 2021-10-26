<template>
  <div
    class="dir-item dir-item--link"
    :class="{ selected: isSelected }"
    @click="onClick"
  >
    <a class="dir-item__title">{{ name }}</a>
  </div>
</template>

<script>
import dirItemMixin from "../../../mixins/dirItem";

export default {
  name: "directory-link",
  mixins: [dirItemMixin],
};
</script>

<style scoped src="../styles.css"></style>
