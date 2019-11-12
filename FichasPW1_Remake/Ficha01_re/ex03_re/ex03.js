const vm = new Vue({
    el: "#intro",
    data: {
        weight: 75,
    },
    beforeCreate: function(){
        console.log(`beforeCreate ${this.weight}`);
    
    },
    created: function(){
        console.log(`created ${this.weight}`);

    },
    beforeMount: function(){
        console.log(`beforeMount ${this.weight}`);
    
    },
    mounted: function(){
        console.log(`mounted ${this.weight}`);

    },
    beforeUpdate: function(){
        console.log(`beforeUpdate ${this.weight}`);
    
    },
    updated: function(){
        console.log(`updated ${this.weight}`);

    },   
    beforeDestroy: function(){
        console.log(`beforeDestroy ${this.weight}`);
    
    },
    destroied: function(){
        console.log(`destroid ${this.weight}`);

    }
})