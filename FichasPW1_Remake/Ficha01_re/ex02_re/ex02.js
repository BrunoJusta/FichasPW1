const vm = new Vue({
    el: "#intro",
    data: {
        firstName: "Bruno",
        lastName: "Justa",
        age: "21",
    },
    methods: {
        fullName: function() {
            return `${this.firstName} ${this.lastName} `
        }

    }
})