<template>
  <div id="app">
    <div class="container">
      <div v-if="directory" class="dir-tree__wrapper">
        <div class="dir-tree__selected-item">
          <b>Путь к файлу: </b>
          <span>{{ formatedSelectedFilePath }}</span>
        </div>
        <div class="dir-tree">
          <Directory
            :name="directory.name"
            :contents="directory.contents"
            @selectitem="onSelectItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Directory from "./components/Directory";

export default {
  name: "App",
  components: {
    Directory,
  },
  data() {
    return {
      directory: null,
      selectedFilePath: {
        value: [],
      },
    };
  },
  provide() {
    return {
      selectedPath: this.selectedFilePath,
    };
  },
  async created() {
    try {
      const response = await fetch("/static/node_modules.json");
      this.directory = await response.json();
    } catch (error) {
      window.alert("Что-то пошло не так. Обновите страницу!");
    }
  },
  computed: {
    formatedSelectedFilePath() {
      return this.selectedFilePath.value.join("/");
    },
  },
  methods: {
    onSelectItem(path) {
      this.selectedFilePath.value = path;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 30px;
}
.dir-tree__wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
}

.dir-tree {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.dir-tree__selected-item {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid black;
}
</style>
