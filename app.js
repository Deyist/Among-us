function myFunc() {
console.log("click")
const num = document.querySelector("#counter").textContent;
let counter = num
let win = document.querySelector("#finished")
//let buttonup = document.querySelector(".mover")
let up = document.querySelector(".upCount")
let down = document.querySelector(".downCount")
let inside = document.getElementById("#divInside1")

//buttons.forEach(function (button){   
up.addEventListener('click', function (){
    counter++
    const count = document.querySelector("#counter")
    if(counter>=300){
        count.innerHTML = 300 + '&deg;'
        counter=300
        win.textContent = "youre done!"
        
    } else{
        
        console.log(counter)
        count.innerHTML = counter + '&deg;'
        win.textContent = ""
    }
})
down.addEventListener('click', function (){
    counter--
    const count = document.querySelector("#counter")
    
        
        console.log(counter)
        count.innerHTML = counter + '&deg;'
        win.textContent = ""
    
})

//})
}
//counter--