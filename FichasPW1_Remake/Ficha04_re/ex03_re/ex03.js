const vm = new Vue({
    el: "#intro",
    data: {
        teams: [{
                name: "benfica",
                year: 1910,
                location: "Lisboa"
            },
            {
                name: "porto",
                year: 1912,
                location: "Porto"
            },
            {
                name: "sporting",
                year: 1914,
                location: "Lisboa"
            }
        ],
        loca: ""
    },
    methods: {
        addTeam(name, year, location) {
            this.teams.push({
                name: name,
                year: year,
                location: location
            })
        },
        filterTeams(loca) {
            this.loca = loca
        }

    },
    computed: {
        listFilterTeams() {
            if (this.loca === "") {
                return this.teams
            } else {
                return this.teams.filter(
                    team => team.location === this.loca
                )
            }

        }
    }
})