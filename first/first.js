const buttons = document.querySelectorAll('.button'); 
const body = document.querySelector("body");

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        //  console.log(e);
          console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'yellow'){ // Corrected typo from 'yello' to 'yellow'
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id // 'purple' //this also we use this
        }

        //  body.style.backgroundColor = e.target.id; // This line will change the background color
    });
});
