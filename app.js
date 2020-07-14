vm = new Vue({
    el: "#app",
    data: {
        title: "Hello Vue js World!",
        name: "Stanko Bebek",
        url: "https://fpmoz.sum.ba/index.php?lang=hr",
        classes: ['first', 'second'],
        text: "FPMOZ",
        counter: 0,
        amount: ''
    },
    methods: {
        greet(vrijeme){
            return `Dobro ${vrijeme}, ${this.name}`
        },
        increase(amount){
            if(typeof amount === 'undefined'){
                this.counter += parseInt(this.amount)
            }else{
                this.counter += amount 
            }
            
        },
        decrease(amount){
            if(typeof amount === 'undefined'){
                this.counter -= parseInt(this.amount)
            }else{
                this.counter -= amount
            }
        }
    }
})

//console.log(vm.$data.title)
//console.log(vm.title)
//console.log(document.getElementById("app"))

vm.$watch('title', function(oldValue, newValue){
    console.log(oldValue, newValue)
})