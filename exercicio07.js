let n = Number(prompt("Digite quantos números da sequência de fibonacci vc deseja: "));
let n1 = 0
let n2 = 1
console.log(`${n1}`)
console.log(`${n2}`)
for(let i=3;i<=n;i++){
    let proximo = n1+n2
    console.log(`${proximo}`)
    n1=n2
    n2=proximo
}