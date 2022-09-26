//Proposta: 

/* 
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e
então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de
sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada,
somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as
opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve
encerrar o programa.
*/

//atribuindo valores
let balance = Number(prompt("Quanto deseja depositar?"))

let option = 0

//loop
do {
    //dando opções
    option = Number(prompt(`
    \n Dinheiro: ${balance}$ 
    \n Escolha uma das opções para prosseguir 
    \n [1]Depositar 
    \n [2]Retrar
    \n [3]Sair`))

    //Exibindo resultado da escolha
    switch (option) {
        case 1:
            action = Number(prompt("Digite quanto deseja depositar:"))
            balance += action
            break;

        case 2:
            action = Number(prompt("Digite quanto deseja retirar:"))
            balance -= action
            break;
    }
} while (option !== 3)

alert("Encerrando o Programa")