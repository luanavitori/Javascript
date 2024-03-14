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

let calcular = ds.question('Qual operacao deseja usar? ');

switch (calcular) {
    case "adicao":
        console.log(num1+num2)
        break;
    case "subtracao":
        console.log(num1-num2)
        break;

        case "multiplicacao":
        console.log(num1*num2)
        break;
        case "divisao":
        console.log(num1/num2)
        break;
    default:
        console.log("Operação Inválida!")
        break;
}


let categoria = ds.question("Digite sua categoria:");
let salario = ds.questionInt("Digite seu salario atual:");

switch (categoria) {
    case "A":
        console.log(salario+5%)
        break;

    default:
        console.log("Ocorreu algum erro!")
        break;
}


