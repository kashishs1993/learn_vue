<template>
  <img align="left" alt="Opeth" src="./assets/opeth.png" width="300" height="200">
  <HelloWorld msg="Opeth"/>
  <Portfolio des="Opeth is a Swedish progressive metal/rock band from Stockholm, formed in 1989. Opeth were formed by keyboardist, lead vocalist, guitarist and songwriter Mikael Åkerfeldt. The group has been through several personnel changes, including the replacement of every single original member; notably lead vocalist David Isberg in 1992. Opeth has consistently incorporated progressive, folk, blues, classical, and jazz influences into its usually lengthy compositions, as well as strong influences from death metal, especially in their early works. Many songs include acoustic guitar passages and strong dynamic shifts, as well as death growls. Opeth is also well known for their incorporation of Mellotrons in their work. The band rarely made live appearances supporting their first four albums, but since conducting their first world tour after the 2001 release of Blackwater Park, they have led several major world tours."/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Portfolio
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
