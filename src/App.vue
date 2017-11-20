<template>
    <div id="app">
        <message>Hello there! Lorem ipsum dolor.</message>
        <message>WTf Lorem ipsum dolor sit amet.</message>
        <hr>
        <counter></counter>
    </div>
</template>

<script>
    import Message from './components/Message.vue';
    import Counter from './components/Counter.vue';
    export default {
        name: 'app',
        components: { Message, Counter },
    }
</script>

<style lang="scss">

</style>
