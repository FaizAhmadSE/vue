Vue.component('task-list', {
    template: `
        <ul>
            <task v-for="task in tasks" v-text="task.description"></task>
        </ul>`,
    data() {
        return {
            tasks: [
                { description: 'Milch kaufen', completed: true},
                { description: 'Brot backen', completed: true},
                { description: 'Zimmer putzen', completed: true},
                { description: 'Auto in der Werkstatt bringen', completed: true},
                { description: 'Elducation fertig machen', completed: false},
                { description: 'Vue.js verstehen', completed: false}
            ]
        }
    }
});

Vue.component('task', {
   template:'<li><slot></slot></li>'
});

new Vue({
    el: '#app'
});