function myFunc() {
console.log("click")
const num = document.querySelector("#counter").textContent;
let counter = num
let win = document.querySelector("#finished")
let win2 = document.querySelector("#finished2")
//let buttonup = document.querySelector(".mover")
let up = document.querySelector(".upCount")
let down = document.querySelector(".downCount")
let inside = document.getElementById("#divInside1")
let retry = document.getElementById("retry")
let winNoise = document.getElementById("winNoise")
let boop = document.getElementById("boop")
let dead = document.getElementById("dead")
let task = document.getElementById("finishedTask")
dead.addEventListener("click", function (){  

secret.play();
secret.volume = 0.1;
setTimeout(function(){ document.getElementById("report").style.display = "block" }, 2500); 
setTimeout(function(){ document.getElementById("report").style.display = "none" }, 9000); 
setTimeout(function(){ document.getElementById("report2").style.display = "block" }, 13000); 
setTimeout(function(){ document.getElementById("report2").style.display = "none" }, 16000); 
setTimeout(function(){ document.getElementById("among").style.display = "none"; document.getElementById("among2").style.display = "none";  document.getElementById("task").style.display = "none";  document.getElementById("among2").style.display = "none";document.getElementById("report3").style.display = "block";document.getElementById("among3").style.display = "block";document.getElementById("among4").style.display = "block"; document.getElementById("among5").style.display = "block"      }, 16000); 
setTimeout(function(){ document.getElementById("report3").style.display = "none" }, 19000); 
setTimeout(function(){ document.getElementById("retry").style.display = "block" }, 30000); 
})

//buttons.forEach(function (button){   
up.addEventListener('click', function (){
    counter++
    
    
    boop.play();
    
    boop.volume = 0.3;
    const count = document.querySelector("#counter")
    if(counter>=300){
        count.innerHTML = 300 + '&deg;'
        task.play();
        counter=300
        document.getElementById("insideManual").style.display = "none"

        win.textContent = "Task Completed!!!"
        win2.textContent = "Task Completed!!!"
        setTimeout(function(){ document.getElementById("finished").style.display = "none"; document.getElementById("finished2").style.display = "none" }, 1500);
        setTimeout(function(){ document.getElementById("winImg").style.display = "block"; document.getElementById("retry").style.display = "block" }, 2500);
        setTimeout(function(){ document.getElementById("quitImg").style.display = "block"; document.getElementById("quit").style.display = "block";  winNoise.play(); }, 2500);
       
        
    } else{
        
        console.log(counter)
        count.innerHTML = counter + '&deg;'
        win.textContent = ""
    }
    
})

down.addEventListener('click', function (){
    counter--
    boop.play();
    const count = document.querySelector("#counter")
    
        
        console.log(counter)
        count.innerHTML = counter + '&deg;'
        win.textContent = ""
    
})

//})
}
//counter--