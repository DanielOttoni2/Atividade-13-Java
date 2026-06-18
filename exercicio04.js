function NumeroPar(){
  
    for(let i=1;i<=8;i++){
        let numero=Number(prompt(`escreva o ${i} e veja se ele e par ou impar:`))
        if(numero % 2==0){console.log(`esse numero e par ${numero}`)}
        else console.log(`esse numero e impar ${numero}`);
    }
    return NumeroPar
}
let numero = NumeroPar()
