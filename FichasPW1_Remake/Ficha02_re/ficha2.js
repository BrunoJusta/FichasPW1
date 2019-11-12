const vm = new Vue({
    el: "#intro",
    data: {
        number: 0
    },
    beforeCreate: function () {
        console.log(`beforeCreate ${this.number}`);
        if(localStorage.number){
            this.number = localStorage.number
        }

    },
    created: function () {
        console.log(`created ${this.number}`);
        if (localStorage.number){
            this.number = parseInt(localStorage.number)
        }

    },
    beforeMount: function () {
        console.log(`beforeMount ${this.number}`);

    },
    mounted: function () {
        console.log(`mounted ${this.number}`);

    },
    beforeUpdate: function () {
        console.log(`beforeUpdate ${this.number}`);

    },
    updated: function () {
        console.log(`updated ${this.number}`);
        localStorage.setItem("number", this.number)

    },
    beforeDestroy: function () {
        console.log(`beforeDestroy ${this.number}`);

    },
    destroied: function () {
        console.log(`destroid ${this.number}`);

    },
    methods: {
        plusNumber: function () {
            this.number += 1
        },
        minusNumber: function () {
            this.number -= 1
        },

    }
})