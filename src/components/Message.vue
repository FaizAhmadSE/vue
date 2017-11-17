<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .box {
        background: lime;
        padding: 25px;
        border: 1px solid limegreen;

        & + & {
            margin-top: 25px;
        }
    }

</style>
