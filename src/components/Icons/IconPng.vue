<template>
  <div class="icon-png">
    <img :src="`/static/icons/${name}.png`" :alt="name" />
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.icon-png img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
