const vm = new Vue({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        activeColor: "black",
        fontSize: "16px",
        backColor: "white",
        show: "visible"
    },
    methods: {
        changeRed: function (color) {
            this.activeColor = color
        },
        changePx: function (size) {
            this.fontSize = size
        },
        changeY: function (bcolor) {
            this.backColor = bcolor
        },
        showHide: function (vis) {
            if (this.show === "visible") {
                this.show = vis
            } else {
                this.show = "visible"
            }
        },
    }
})