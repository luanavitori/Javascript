import ds from 'readline-sync';

let numero = ds.questionInt("Digite um numero:");
let cont = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while (cont <= 10) {
    let resultado = numero * cont;
    console.log(`${numero} x ${cont} = ${resultado}`);
    cont++;
}



let nota1 = ds.questionInt("Digite a nota do 1 bimestre:");
let nota2 = ds.questionInt("Digite a nota do 2 bimestre:");
let nota3 = ds.questionInt("Digite a nota do 3 bimestre:");
let nota4 = ds.questionInt("Digite a nota do 4 bimestre:");





