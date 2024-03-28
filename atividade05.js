/*
01. Crie uma função que receba uma string como
parâmetro e retorne a mesma string com todas as letras
em caixa alta.
*/

function caixaAlta (string) {
    return string.toUpperCase()
};

const nome = caixaAlta('luana');
console.log(nome);
/*
02. Crie uma função que receba um número como
parâmetro e verifique se ele é par ou ímpar. Retorne uma
string.
*/

function parouimpar(numero) {
    if (numero % 2 === 0) return 'Par'
    else return 'Impar'
}

console.log(parouimpar(5))



