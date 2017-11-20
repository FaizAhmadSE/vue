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
        if (field) {
            delete this.msg[field];

            return;
        }

        this.errors = {};
    }

    any() {
        return Object.keys(this.msg).length > 0;
    }
}

class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    submit(requestType, url) {
        axios[requestType](url, this.data())
            .then(response => this.onSuccess(response.data))
            .catch(error => this.onFail(error.response.data.errors));
    }

    onSuccess(data) {
        alert(data.message);

        this.reset();
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}

new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        }),
    },

    methods: {
        onSubmit() {
            this.form.submit('post', '/public/projects/store');
        }
    }
});
