<template>
    <div class="counter">
        <h2>The count: {{ count }}</h2>
        <button @click="count += 10">Increment Counter</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                count: 0,
            }
        }
    }
</script>
