<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <img src="./assets/opeth.png">
  <HelloWorld msg="Opeth"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Description from './components/Description.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
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
</style>
