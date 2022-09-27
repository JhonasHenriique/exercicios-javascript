//Proposta:

/*
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número(de 1 a 20).O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string.Depois deve exibir esses resultados e finalizar.
*/

//atribuindo valores
let number = Number(prompt("Digite o número que deseja ver a tábuada: "))
let table = ""

//multiplicação e concatenação
for (let base = 1; base <= 20; base++) {
    let result = base * number
    table += `\n ${base} x ${number} = ${result}`
}
//exibindo resultados
alert(`Tabuada de multiplicação do número digitado: \n ${table}`)




