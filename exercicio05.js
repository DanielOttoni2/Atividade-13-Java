function validarNota() {
    let nota = Number(prompt("Digite uma nota entre 0 e 10:"));

    while (nota < 0 || nota > 10) {
        nota = Number(prompt("Nota inválida! Digite novamente:"));
    }

    return nota;
}

const notaValida = validarNota();
alert(`Nota cadastrada com sucesso: ${notaValida}`);