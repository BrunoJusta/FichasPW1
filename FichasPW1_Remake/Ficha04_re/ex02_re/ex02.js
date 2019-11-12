const vm = new Vue({
    el: "#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
        char: ""
    },
    methods:{
        addSchool: function(school){
            if(!this.schools.includes(school)){
                this.schools.push(school)
            }
            else{
                alert("ESCOLA JÁ EXISTE!")
            }
        },
        filterSchool: function (char) {
            this.char = char
        }
    },
    computed:{
        computedFilterSchools: function () {
            return this.schools.filter(
                school => school.startsWith(this.char)
            )
        }
    }
})
