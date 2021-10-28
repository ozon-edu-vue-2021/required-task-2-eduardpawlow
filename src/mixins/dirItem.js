import IconPng from "../components/Icons/IconPng.vue";

export default {
  components: {
    IconPng,
  },
  props: {
    name: {
      type: String,
      default: "UNKNOWN",
    },
    path: {
      type: Array,
      default: () => [],
    },
  },
  inject: ["selectedPath"],
  computed: {
    isSelected() {
      const path = [...this.path, this.name];

      for (const index in path) {
        if (this.selectedPath.value[index] !== path[index]) return false;
      }
      return true;
    },
  },
  methods: {
    onClick() {
      this.$emit("selectitem", [...this.path, this.name]);
    },
  },
};
