function fatorial1(){
    let numero = Number(prompt("Escreva o numero para caucular o fatorial"));
    let fatorial = Number(prompt("Ate qual numero vai seu fatorail"));
    let cauculo = 0; 

    for (let i = 0; i <= fatorial; i++){
        cauculo = i * fatorial; 
        alert(`${cauculo}`);
    }
    return cauculo;
}

let resultfatorial = fatorial1();
alert(resultfatorial);