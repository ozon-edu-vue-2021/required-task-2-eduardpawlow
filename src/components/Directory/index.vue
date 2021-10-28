<template>
  <div class="dir-item">
    <div class="dir-item__title" @click="toggleOpen">
      <IconPng :name="isOpen ? 'folder-opened' : 'folder'" />
      <span>{{ name }}</span>
      <ArrowIcon :class="['dir-item__arrow', { active: isOpen }]" />
    </div>
    <div class="dir-item__content" v-if="isOpen">
      <component
        v-for="(item, index) in contents"
        :is="getComponentName(item.type)"
        :key="`${name + index}`"
        v-bind="item"
        :path="[...path, name]"
        @selectitem="onSelectItem"
      />
    </div>
  </div>
</template>

<script>
import DirectoryFile from "./File";
import DirectoryLink from "./Link";
import Directory from "../Directory";
import ArrowIcon from "../Icons/Arrow.vue";
import IconPng from "../Icons/IconPng.vue";

export default {
  name: "directory",
  components: {
    DirectoryFile,
    DirectoryLink,
    Directory,
    ArrowIcon,
    IconPng,
  },
  props: {
    name: { type: String, default: "UNKNOWN" },
    contents: {
      type: Array,
      default: () => [],
    },
    path: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { isOpen: false };
  },
  methods: {
    getComponentName(type) {
      return type === "directory" ? "directory" : `directory-${type}`;
    },
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    onSelectItem(path) {
      this.$emit("selectitem", path);
    },
  },
};
</script>

<style scoped src="./styles.css"></style>
