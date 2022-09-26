
//Proposta:

/* 
Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma,subtração,multiplicação e divisão)

Após calcular os resultados o programa deve exibi-los na tela.
*/

//atribuindo valores
const number1 = prompt("Informe um número : ")
const number2 = prompt("Informe outro número : ")

//convertendo as strings
const n1 = parseFloat(number1)
const n2 = parseFloat(number2)

//exibindo o resultado
alert(` 
  \n Soma: ${n1 + n2} 
  \n Subtração: ${n1 - n2} 
  \n Divisão: ${n1 / n2} 
  \n Multiplicação: ${n1 * n2}
`)