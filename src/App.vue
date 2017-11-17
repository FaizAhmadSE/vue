<template>
    <div id="app">
        <message>Hello there! Lorem ipsum dolor.</message>
        <message>WTf Lorem ipsum dolor sit amet.</message>
    </div>
</template>

<script>
    import Message from './components/Message.vue';

    export default {
        name: 'app',
        components: { Message },
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss">

</style>
