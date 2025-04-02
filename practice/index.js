let input = document.getElementById("input");
let button = document.getElementById("btn");
let output = document.getElementById("table");

button.addEventListener("click", function() {
    output.innerHTML = ""; // Clear previous output
    let value = input.value;

    

    for (let i = 0; i <= 10; i++) {
        let result = `${value} x ${i} = ${value * i}`;
        output.innerHTML += result + "<br>"; // Append each result to the output div
    }
});