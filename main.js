Vue.component('coupon', {
   template: `
        <input placeholder="code eingeben" @blur="$emit('applied')">
   `,
});

new Vue({
    el: '#app',

    data: {
        couponActive: false,
    },

    methods: {
        onCouponApplied() {
            this.couponActive = true;
            console.log('was geht ab');
        }
    },
});
