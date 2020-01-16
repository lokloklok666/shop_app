<template>
  <div id="app">
    <main-container></main-container>
  </div>
</template>

<script>
import MainContainer from './views/MainContainer.vue'

export default {
    data() {
      return {

      }
    },
    components: {
      'main-container': MainContainer
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
// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
