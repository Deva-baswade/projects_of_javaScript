const randomNumber = parseInt(Math.random()*10+1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remiening = document.querySelector(".lastResult");

const lowerHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultparas')

const p = document.querySelector('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();//this the stop the  value to storing
        const guess =  parseInt(userInput.value);
        // console.log(guess);
        
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("enetr the vlid naumber")
    }else if(guess<1){
        alert("please enet the numebr then 1")
    }else if(guess>100){
        alert("enterht evalid number")
    }else{
        preGuess.push(guess);
        if(numGuess == 11){
            displayGuess(guess)
            displaymessage(`game over number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displaymessage('you guess write')
        endGame()
    }else if(guess<randomNumber){
        displaymessage('number is very low')
    }
}

function displayGuess(guess){
    userInput.value= ''
    guessSlot.innerHTML +=`${guess} `;
    numGuess++;
    remiening.innerHTML= `${11-numGuess}`;
}


function displaymessage(message){
    lowerHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*10+1);
        preGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remiening.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startover.removeChild(p);
    })
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disable','')
    p.classList.add('button')
    p.innerHTML=`<h2 id = "newgame">start new game</h2>`;
    startover.appendChild(p);
    playGame=false;
    newGame()
}