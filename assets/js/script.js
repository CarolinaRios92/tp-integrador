const form = document.querySelector("#form");
const resetButton = document.querySelector("#reset-button");
const resumenButton = document.querySelector("#resumen-button");
const inputCantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
const total = document.querySelector("#total");


resetButton.addEventListener("click", function(e){
    e.preventDefault();
    total.innerHTML = "";
    form.reset();
});

resumenButton.addEventListener("click", function(e){
    e.preventDefault();
    const cantidad = inputCantidad.value;
    let result = cantidad * 200;

    if(categoria.value === "Estudiante"){
        result = result * 0.2;
        total.innerHTML += result;
    } else if(categoria.value === "Trainee"){
        result = result * 0.5;
        total.innerHTML += result;
    } else if(categoria.value === "Junior"){
        result = result * 0.85;
        total.innerHTML += result;
    }
})