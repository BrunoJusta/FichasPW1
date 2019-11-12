const vm = new Vue({
    el: "#intro",
    data: {
        name: "",
        age: "",
        gender: "Feminino",
        selected: "",
        checkedLanguages: [],
        motivation: "",
        points: 0
    },
    methods: {
        getReport: function () {

            if (this.selected !== "") {
                this.points += 5
            }
            if (this.age >= 16 && this.age < 22) {
                this.points += 3
            } else if (this.age >= 22 && this.age <= 35) {
                this.points += 5
            } else if (this.age > 35) {
                this.points += 1
            }
            this.points += this.checkedLanguages.length * 2

            const dlgReport = document.querySelector("#dlgReport");

            dlgReport.innerHTML =
                `<p>O candidato ${this.name}, 
            com ${this.age} anos, 
            do sexo ${this.gender},
            ${this.licenciatura==="" ? 'não tem nenhuma licenciatura' : 'tem uma licenciatura em:'+ this.selected}.</p>
            <p>${this.checkedLanguages.length===0 ? 'não domina linguagens' : 'domina as linguagens: ' + this.checkedLanguages}.</p>
            <p>A motivação para esta candidatura é: ${this.motivation}.</p>
            <p>Pontuação ${this.points}.</p>`

            dlgReport.showModal();

        }
    }
})