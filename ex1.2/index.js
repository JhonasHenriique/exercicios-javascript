//Proposta: 

/* 
Escreva um programa em javascript que permita salvar informações de um recruta. As informações salvas são: 

- Primiro nome
- Sobrenome
- Campo de estudo
- Ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

//atribuindo valores
const firstName = prompt("Qual o seu primeiro nome?")
const secondName = prompt("Qual o seu segundo nome?")
const studie = prompt("Qual o seu campo de estudo?")
const birthDate = prompt("Qual o ano do seu nascimento")

//pegando o ano atual
let date = new Date()
const currentYear = date.getFullYear()

//calculando a idade 
let age = currentYear - birthDate

//exibindo resultados
alert(`
 \n Nome: ${firstName} ${secondName} 
 \n Campo de estudo: ${studie} 
 \n Idade: ${age}
`)