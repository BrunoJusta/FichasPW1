const vm = new Vue({
    el: "#intro",
    data: {
        productName: "Computador Titan W599",
        productDesc: "Processador i7   Disco SSD 256GB    Monitor Samsung 21’",
        productImage: "https://i.ytimg.com/vi/Kr6vnv3Pnuw/maxresdefault.jpg",
        productPrice: 1200,
        productAvailability: true,
    },
    methods:{
        restorePrice: function(){
            this.productPrice = 1200
        },
        buyProduct: function(){
            this.productAvailability = false
            
        }
    }
})