let numero
let maior = 0
let menor = 10000000
while(numero!==0){
    numero = Number(prompt("Digite um número (ou zero para parar): "));
      if(numero>maior){
        maior = numero
    }
    if((numero<menor) && (numero!==0)){
        menor = numero
    }
}

console.log("O menor numero é " + menor) 
console.log("O maior numero é " + maior) 