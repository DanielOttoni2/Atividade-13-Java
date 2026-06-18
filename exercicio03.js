function calcularTotalCompra() {
    let somaTotal = 0;
    for (let i = 1; i <= 10; i++) {
        let preco = Number(prompt(`Digite o valor do ${i}º produto:`));
        somaTotal = somaTotal + preco;
    }
    return somaTotal;
}

const valorFinal = calcularTotalCompra();
alert(`O valor total gasto na compra é: R$ ${valorFinal}`);