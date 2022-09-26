
//Proposta:

/* 
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim,
pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não.
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. 
*/

//atribuindo valores
const turista = prompt("Eai aí, Turista! Qual é o seu nome?")

let cidades = ""
let contagem = 0

//loop com interação
let continuar = prompt("Você já visitou alguma cidade? [sim/não]")

while (continuar === "sim") {
    let cidade = prompt("Qual o nome da cidade visitada?")

    cidades += " - " + cidade + "\n"
    contagem++

    continuar = prompt("Você visitou alguma outra cidade?[sim/não]")
}

//exibindo resultados
alert(`
Turista: ${turista} \n
Quantidade de cidades visitadas: ${contagem} \n
Cidades: \n
${cidades}`)