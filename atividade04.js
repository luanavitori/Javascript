import ds from 'readline-sync';

console.log("\t--- Exercícios While ---")

let numero = ds.questionInt("Digite um numero:");
let cont = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while (cont <= 10) {
    let resultado = numero * cont;
    console.log(`${numero} x ${cont} = ${resultado}`);
    cont++;
}



console.log("\t------------------------------------")

let numAlunos = ds.questionInt("Informe o número de alunos da turma: ")
let somaMedias = 0;
let contadorAlunos = 1;

while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

    let somaNotas = 0;
    let contadorBimestres = 1;

    while (contadorBimestres <= 4) {
        let nota = ds.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas += nota;
        contadorBimestres++;
    }

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);
    contadorAlunos++;
}

let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);



console.log("\t------------------ Exercicios DoWhile -------------")


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativa;

do {
    tentativa = ds.questionInt("Tente adivinhar o número (entre 1 e 100):");

    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

} while (tentativa !== numeroAleatorio);



console.log("\t--- Exercício 01 For ---")




let anterior = 0;
let atual = 1;
console.log(anterior);
console.log(atual);


for (let i = 3; i <= 20; i++) {

    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}



console.log("\t--- Exercício 01 ForInOf ---")


for (let i = 1; i <= 2; i++) {
    let nome = ds.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = ds.questionFloat(`Informe o salário de ${nome}: `);

    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}


console.log("\t--- Exercício 01 ForInOf ---")

const pessoa = {
    nome: "Luana",
    idade: 16,
    cidade: "Vilhena"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}



console.log("\n\t-------------------------")
const cores = ["Azul", "Branco", "Amarelo", "Verde", "Vermelho"];

for (let cor of cores) {
    // Imprimir o valor do elemento
    console.log(cor);
}



console.log("\t------------------------------------")


const string = "JavaScript";

for (let caractere of string) {
    console.log(caractere);
}




