//Componente ShowPage
Vue.component("birds-card", {
    props: ["bird"],
    template: ` 
    <div class='col-sm-4' style="margin-top: 30px;">
    <div class="card" style="width: 18rem;">
        <img v-bind:src="bird.photo" class="card-img-top" style="height: 250px; width:18rem;">
        <div class="card-body">
            <h3 class="card-title">
                {{bird.name}}
            </h3>
            <h5>
                {{bird.scientific}}
            </h5>
            <p class="card-text">
                {{bird.desc}}
            </p>
                    <button v-on:click="removeBird(bird.id)" class="btn btn-primary">REMOVE</button>
                    <button class="btn btn-primary btn-sm" @click="editBird(bird.id)">EDIT</button>


        </div>

    </div>
    </div>
    `,
    methods: {

        removeBird(id) {
            let birds = JSON.parse(localStorage.getItem("birds"))

            if (confirm("Deseja mesmo remover?")) {
                birds = birds.filter(
                    (bird) => bird.id !== id
                )
                localStorage.setItem("birds", JSON.stringify(birds))
                location.reload();

            }

        },
        editBird(id) {
            document.getElementById("editBirdDialog").showModal()
            let birds = JSON.parse(localStorage.getItem("birds"))
            const bird = birds.filter(bird => bird.id === id)[0]
            document.querySelector("#edN").value = bird.name
            document.querySelector("#edP").value = bird.photo
        },
        updateBird() {
            let birds = JSON.parse(localStorage.getItem("birds"))
            birds.map(
                (bird) => {
                    if (bird.name === document.querySelector("#edN").value) {
                        bird.name = document.querySelector("#edN").value
                        bird.photo = document.querySelector("#edP").value
                    }
                }
            )
            document.getElementById("editBirdDialog").close()
        },
    }

})

const vm = new Vue({
    el: "#birdApp",
    data: {
        id: 0,
        name: "",
        scientific: "",
        photo: "",
        desc: "",
        birds: [],
        filterName: "",
        form: {
            name: "",
            photo: "",
            editId: 0,
            editName: "",
            editLink: "",
            filterName: ""
        }
    },
    created() {
        if (localStorage.getItem("birds")) {
            this.birds = JSON.parse(localStorage.getItem("birds"))
        }
    },
    methods: {
        getLastId() {
            if (this.birds.length) {
                return this.birds[this.birds.length - 1].id
            } else {
                return 0
            }
        },
        addBird() {
            this.birds.push({
                id: this.getLastId() + 1,
                name: this.name,
                scientific: this.scientific,
                desc: this.desc,
                photo: this.photo
            })
            localStorage.setItem("birds", JSON.stringify(this.birds))
        },
        removeBird(id) {
            if (confirm("Deseja mesmo remover?")) {
                this.birds = this.birds.filter(
                    (bird) => bird.id !== id
                )
                localStorage.setItem("birds", JSON.stringify(this.birds))

            }

        },
        compareBird(a, b) {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            else return 0
        },
        orderByBird() {
            this.birds.sort(this.compareBird)
        },
        editBird(id) {
            document.getElementById("editBirdDialog").showModal()

            const bird = this.birds.filter(bird => bird.id === id)[0]
            this.form.editId = bird.id
            this.form.editName = bird.name
            this.form.editLink = bird.photo
        },
        updateBird() {
            this.birds.map(
                (bird) => {
                    if (bird.id === this.form.editId) {
                        bird.name = this.form.editName
                        bird.photo = this.form.editLink
                    }
                }
            )
            document.getElementById("editBirdDialog").close()
        },
    },
    computed: {
        // Returns a new array of castles based on the user's filter
        filteredBirds() {
            return this.birds.filter(
                (bird) => {
                    let filterBirdResult = true
                    if (this.filterName !== "") {
                        filterBirdResult = bird.name.includes(this.filterName)

                    }
                    return filterBirdResult

                }
            )

        }

    }

})