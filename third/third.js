const clock = document.getElementById('clock')

let date = new Date();
console.log(date.toLocaleDateString());

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());    
    clock.innerHTML= date.toLocaleTimeString();
},1000)
