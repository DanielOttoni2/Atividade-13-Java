function verificarPrimo(numero) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores = divisores + 1;
        }
    }

    if (divisores === 2) {
        return "Primo";
    } else {
        return "Não Primo";
    }
}

let entrada = Number(prompt("Digite um número inteiro positivo:"));
let resultado = verificarPrimo(entrada);
alert(`O número é: ${resultado}`);