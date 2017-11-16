Vue.component('message', {
    props: ['title' , 'body'],
    template: `
        <article class="message is-primary" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete" v-on:click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>`,
    data() {
        return {
            isVisible: true
        }
    }
});

new Vue({
    el: '#app'
});