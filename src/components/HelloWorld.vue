<template>
    <div class="hello">
        <h1 :title="msg">{{ msg }}</h1>
    </div>
</template>

<style>
</style>

<script>
    export default {
        name: 'Hello',
        data(){
            return {
                msg: 'Primeira aplicação em Vue.js'
            }
        }
    }
</script>
