<template>
<div class="click">
    <button @click="say ('hi')">hi message</button>
    <p>{{counter}} </p>
</div>

</template>

<script>
export default {
    methods: {
        say(message){
            alert(message)
        }
    }
}
</script>

