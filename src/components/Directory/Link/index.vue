<template>
  <div
    class="dir-item dir-item--link"
    :class="{ selected: isSelected }"
    @click="onClick"
  >
    <div class="dir-item__title">
      <IconPng name="link" />
      <a>{{ name }}</a>
    </div>
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
