//Proposta: 

/*
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso).
*/

//atribuindo valores do primeiro veículo
const carName1 = prompt("Qual o nome do veículo ? ")
const carSpeed1 = prompt("Qual a velocidade do carro ? ")

//atribuindo valores do segundo veículo
const carName2 = prompt("Qual o nome do segundo veículo ? ")
const carSpeed2 = prompt("Qual a velocidade do segundo veículo ? ")

// condição e exibição de resultados
if (carSpeed1 > carSpeed2) {
    alert(`${carName1} é o veículo mais rápido`)
} else if (carSpeed2 > carSpeed1) {
    alert(`${carName2} é o veículo mais rápido`)
} else if (carSpeed1 == carSpeed2) {
    alert("Os veículos tem a mesma velocidade")
} else {
    alert("Corriga as informaçõs")
}