const vm = new Vue({
    el: "#intro",
    data: {
        msg: "Programação Web I"
    },
    methods: {
        showMSG() {
            alert(this.msg)
        },
        showMSG2(newMSG) {
            alert(newMSG)
        },
        showMSG3(event) {
            alert(event.target.tagName)
            console.log(event)
            console.log(event.type)
        },
        bubbling() {
            alert("bubbling")
        }
    }
})