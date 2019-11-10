//Componente ShowPage
Vue.component("game-soccer-card", {
    props: ["game"],
    template:
        ` 
    <div class='col-sm-4'>
    <div class="card" style="width: 18rem;">
        <img v-bind:src="game.stadiumLink" class="card-img-top">
        <div class="card-body">
            <h3 class="card-title">
                {{game.stadiumName}}
            </h3>
            <h5>
                {{getResult(game)}}
            </h5>
            <p class="card-text" v-for="goal in game.goals">
                {{goal.minute}}' {{goal.name}}
            </p>
        </div>
    </div>
    </div>
    `,
    methods: {
        getResult(game) {
            let goals1, goals2

            //Cálculo dos golos da 1ª equipa
            goals1 = game.goals.filter(
                goal => game.teamName1 === goal.team
            ).length
            //Cálculo dos golos da 2ª equipa
            goals2 = game.goals.filter(
                goal => game.teamName2 === goal.team
            ).length

            return `
                ${game.teamName1} ${goals1} - ${game.teamName2} ${goals2}
            `
        }
    }
})


//Instancia Vue
const vm = new Vue({
    el: "#app",
    data: {
        games: []
    },
    created: function () {
        this.games = [
            {
                id: 1,
                date: "12-12-2019",
                stadiumName: "Estádio do Dragão",
                stadiumLink: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZGU5qhkhtJiL8aSOq3UZkgDfKMrPoUxNjmZV/yUqfLDfHvQvPG9QR8eQiAvMA9vqwpgF9WjfaZ1IETw2h5ExmHxeJ7IEUcq0toCit8ZUY4tNEtk=",
                teamName1: "Porto",
                teamName2: "Benfica",
                goals: [
                    { name: "Marega", 
                      minute: 10, 
                      team: "Porto" 
                    },
                    { name: "Telles",
                      minute: 25,
                      team: "Porto" 
                    },
                    { name: "Jota",
                      minute: 44,
                      team: "Benfica" 
                    }
                ]
            },
            {
                id: 2,
                date: "12-12-2019",
                stadiumName: "Estádio da Luz",
                stadiumLink: "https://cdn.record.pt/images/2019-09/img_920x518$2019_09_24_23_18_44_1606362.jpg",
                teamName1: "Benfica",
                teamName2: "Aves",
                goals: [
                    { name: "João",
                      minute: 10,
                      team: "Aves" 
                    },
                    { name: "Alex",
                      minute: 25, 
                      team: "Aves" 
                    },
                    { name: "Jota",
                      minute: 44,
                      team: "Benfica" 
                    }
                ]

            }
        ]
    }
})