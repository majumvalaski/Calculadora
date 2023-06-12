const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
let resposta = document.querySelector("#resposta");

seletor.addEventListener("change", calcular);
campo1.addEventListener("keyup", calcular);
campo2.addEventListener("keyup", calcular);

function calcular() {
    let resultado;

    if (campo1.value === "" || campo2.value === "") {
        resposta.innerHTML = "Campo Vazio";
        setTimeout(() => {
            resposta.innerHTML = "";
        }, 5000); //o tempo depois que a mensagem some (5000ms = 5s)
    } else {
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if (operacao === "somar")
            resultado = valor1 + valor2;
        if (operacao === "subtrair")
            resultado = valor1 - valor2;
        if (operacao === "multiplicar")
            resultado = valor1 * valor2;
        if (operacao === "dividir")
            resultado = valor1 / valor2;
    }

    if (resultado !== undefined) {
        resposta.innerHTML = resultado.toFixed(5);
    }
}