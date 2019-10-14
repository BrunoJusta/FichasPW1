const vm = new Vue({
    el: "#intro",
    data: {
        person: {
            firstName: "Rui",
            lastName: "Silva",
            age: 23,
            balance: 4432
        }
    },
    created: function () {
        console.log(`Event: CREATED`);

    },
    mounted: function () {
        console.log(`Event: MOUNTED`);

    },
    updated: function () {
        console.log(`Event: UPDATED`);
    },
    methods: {
        dataPerson: function () {
            console.log(`METHOD --> NAME:${ this.person.firstName} e IDADE:${this.person.age}`)
            return `METHOD --> NAME:${ this.person.firstName} e IDADE:${this.person.age} `

        }
    },
    computed: {
        dataPersonComputed: function () {
            console.log(`COMPUTED --> NAME:${ this.person.firstName} e IDADE:${this.person.age}`)
            return `COMPUTED --> NAME:${ this.person.firstName} e IDADE:${this.person.age}`
        },
        fullNameComputed: function () {
            console.log(`${ this.person.firstName} ${this.person.lastName}`)
            return `${ this.person.firstName} ${this.person.lastName} `

        }
    },
    watch:{
        'person.age'(newAge, oldAge){
            console.log(`Change age from ${oldAge} to ${newAge}`)
        }
    },
    filters:{
        formatBalance: function(value){
            return `${(value/100).toFixed(2)}€`
        }
    },

})