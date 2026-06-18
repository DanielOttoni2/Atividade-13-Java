function calcularTabuada(numeroBase) {
for (let i = 1; i <= 10; i++) {
alert(`${numeroBase} x ${i} = ${numeroBase * i}`);}}
let entrada = prompt("Digite um número:");
let numeroEscolhido = Number(entrada);
calcularTabuada(numeroEscolhido);