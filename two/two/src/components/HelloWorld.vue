<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        "Opeth is a Swedish progressive metal/rock band from Stockholm, formed in 1989. Opeth were formed by keyboardist, lead vocalist, guitarist and songwriter Mikael Åkerfeldt. The group has been through several personnel changes, including the replacement of every single original member; notably lead vocalist David Isberg in 1992. Opeth has consistently incorporated progressive, folk, blues, classical, and jazz influences into its usually lengthy compositions, as well as strong influences from death metal, especially in their early works. Many songs include acoustic guitar passages and strong dynamic shifts, as well as death growls. Opeth is also well known for their incorporation of Mellotrons in their work. The band rarely made live appearances supporting their first four albums, but since conducting their first world tour after the 2001 release of Blackwater Park, they have led several major world tours."
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    msg: String,
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 30;
}
li {
  display: inline-block;
  margin: 10 10px;
}
p {
  color: #fc2105;
} 
</style>
