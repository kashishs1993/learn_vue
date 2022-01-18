<template>
    <div class="portfolio">
        <p> {{des}} </p>
        <input v-model="addDescription">
        <p> {{addDescription}} </p>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
    props: {
        des: String,
        addDes: String
    }

}
</script>

<style>
p {
    color:rgb(0, 0, 0)
}
</style>