//1. Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.

//2. Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
//do mês.

//3. Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da
//operação.

import ds from 'readline-sync'
let dias = ds.questionInt('Digite o dia da semana:');

switch (dias) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sexta-feira")
        break;
    case 7:
        console.log("Sábado")
        break;

    default:
        console.log("Não encontrada!")
        break;
}

let meses = ds.questionInt('Digite o numero do mes:');
switch (meses) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Marco")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Setembro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Dezembro")
        break;

    default:
        console.log("Nao encontrado!")
        break;
}

let num1 = ds.questionInt("Digite um numero:");
let num2 = ds.questionInt("Digite um numero:");

let calcular = ds.calcular('Qual operacao deseja usar?');
