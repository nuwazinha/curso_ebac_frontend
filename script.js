const form = document.querySelector("form");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA){
        alert("Formulário enviado com sucesso!");
        form.reset();
    }
    else{
        alert("O valor do campo A precisa ser menor que o campo B!");
    }
});