class Errors {
    constructor() {
        this.msg = {};
    }

    get(field) {
        if (this.msg[field]) {
            return this.msg[field][0];
        }
    }

    record(errors) {
        this.msg = errors;
    }

    has(field) {
        return this.msg.hasOwnProperty(field);
    }

    clear(field) {
        delete this.msg[field];
    }

    any() {
        return Object.keys(this.msg).length > 0;
    }
}

new Vue({
    el: '#app',

    data: {
        name: '',
        description: '',
        errors: new Errors()
    },

    methods: {
        onSubmit() {
            axios.post('/public/projects/store', this.$data)
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data.errors));
        },

        onSuccess(response) {
            alert(response.data.message);

            this.name = '';
            this.description = ''
        }
    }
});
