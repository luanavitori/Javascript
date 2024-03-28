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


