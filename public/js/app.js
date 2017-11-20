new Vue({
    el: '#app',

    data: {
        skills: [],
    },

    mounted() {
        axios.post('/public/skills')
            .then(response => this.skills = response.data);
    }
});
