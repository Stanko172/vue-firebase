vm = new Vue({
    el: "#app",
    data: {
        title: "Hello Vue js World!"
    }
})

//console.log(vm.$data.title)
//console.log(vm.title)
//console.log(document.getElementById("app"))

vm.$watch('title', function(oldValue, newValue){
    console.log(oldValue, newValue)
})