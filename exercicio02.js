function somarIntervalo(limiteN) {
    let somaAcumulada = 0;

    for (let i = 1; i <= limiteN; i++) {
        somaAcumulada = somaAcumulada + i;
    }

    return somaAcumulada;
}

let entrada = prompt("Digite um número inteiro positivo limite:");
let numeroLimite = Number(entrada);

let resultadoFinal = somarIntervalo(numeroLimite);

alert(`A soma acumulada é: ${resultadoFinal}`);