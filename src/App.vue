<template>
  <div id="app">
    <el-container>
      <left-side></left-side>
      <main-container>
      </main-container>
    </el-container>
  </div>
</template>

<script>

import LeftSide from './views/LeftSide.vue'
import MainContainer from './views/MainContainer.vue'
export default {
    data() {
      return {

      }
    },
    components: {
      'left-side': LeftSide,
      'main-container': MainContainer,
    },
    methods: {

    }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
