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

export default Errors;