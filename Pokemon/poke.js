//Componente ShowPage
Vue.component("pokemons-card", {
    props: ["pokemon"],
    template: ` 
    <div class='col-sm-4' style="margin-top: 30px;" >
    <div class="card" style="width: 18rem;">
        <img v-bind:src="pokemon.photo" class="card-img-top" style="height: 250px; width:18rem;">
        <div class="card-body">
            <h3 class="card-title">
                {{pokemon.name}}
            </h3>
            <h5>
                {{'' + pokemon.checkedTypes}}
            </h5>
            <p class="card-text">
                Pokémon Moves: {{pokemon.one}}, {{pokemon.two}}, {{pokemon.three}}, {{pokemon.four}}
            </p>
            <button v-on:click="removePokemon(pokemon.id)" class="btn btn-primary">REMOVE</button>


        </div>

    </div>
    </div>
    `,
    methods: {

        removePokemon(id) {
            if (confirm("Deseja mesmo remover?")) {
                vm.pokemons = vm.pokemons.filter(
                    (pokemon) => pokemon.id !== id
                )
                localStorage.setItem("pokemons", JSON.stringify(vm.pokemons))

            }

        }
    }
})




const vm = new Vue({
    el: "#intro",
    data: {
        id: 0,
        pokemons: [],
        name: "",
        one: "",
        two: "",
        three: "",
        four: "",
        photo: "",
        checkedTypes: []
    },
    created() {
        if (localStorage.getItem("pokemons")) {
            this.pokemons = JSON.parse(localStorage.getItem("pokemons"))
        }
    },
    methods: {
        getLastId() {
            if (this.pokemons.length) {
                return this.pokemons[this.pokemons.length - 1].id
            } else {
                return 0
            }
        },
        addPokemon() {
            this.pokemons.push({
                id: this.getLastId() + 1,
                name: this.name,
                type: this.type,
                checkedTypes: this.checkedTypes,
                one: this.one,
                two: this.two,
                three: this.three,
                four: this.four,
                photo: this.photo
            })
            localStorage.setItem("pokemons", JSON.stringify(this.pokemons))
        },
        comparePoke(a, b) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            else return 0
        },
        orderByPoke() {
            this.pokemons.sort(this.comparePoke)
        }

    }

})