const vm = new Vue({
    el: "#intro",
    data: {
        id: 0,
        desc: "",
        type: "Pessoal",
        tasks: [],
        filter: "Todos"

    },
    created() {
        window.addEventListener("unload", this.saveStorage)
        if (localStorage.getItem("tasks")) {
            this.tasks = JSON.parse(localStorage.getItem("tasks"))
        }
    },
    methods: {
        getLastId: function () {
            if (this.tasks.length) {
                return this.tasks[this.tasks.length - 1].id
            } else {
                return 0
            }
        },
        getReport: function () {
            if (!this.tasks.some(task => task.desc === this.desc)) {
                this.tasks.push({
                    id: this.getLastId() + 1,
                    desc: this.desc,
                    type: this.type
                })

            } else {
                alert("JA ADICIONADO!")
            }

        },
        removeTask: function (id) {
            this.tasks = this.tasks.filter(task => task.id !== id)
        },
        saveStorage() {
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
    },
    computed: {
        filterTasks() {
            return this.tasks.filter(
                task => task.type == this.filter || this.filter == "Todos"
            )

        }
    }
})