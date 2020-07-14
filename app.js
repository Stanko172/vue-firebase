vm = new Vue({
    el: "#app",
    data: {
        title: "Hello Vue js World!",
        name: "Stanko Bebek",
        url: "https://fpmoz.sum.ba/index.php?lang=hr",
        classes: ['first', 'second'],
        text: "FPMOZ"
    },
    methods: {
        greet(vrijeme){
            return `Dobro ${vrijeme}, ${this.name}`
        }
    }
})

//console.log(vm.$data.title)
//console.log(vm.title)
//console.log(document.getElementById("app"))

vm.$watch('title', function(oldValue, newValue){
    console.log(oldValue, newValue)
})