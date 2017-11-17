window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
   template: `
        <input placeholder="code eingeben" @blur="applyCoupon">
   `,

    methods: {
        applyCoupon() {
            Event.fire('applied');
        }
    },
});

new Vue({
    el: '#app',

    data: {
        couponActive: false,
    },

    created() {
        Event.listen('applied', () => this.couponActive = true);
    }
});
