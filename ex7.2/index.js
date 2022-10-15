//Proposta

/*
Escreva um programa em javascript para simular um baralho de cartas.

- O programa deve iniciar mostrando na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de "Adicionar uma carta","Puxar uma carta" e "Sair".

- Ao escolher "Adicionar uma carta",o programa deve perguntar o nome da carta e adiciona-la no topo do baralho.

- Ao escolher "Puxar uma carta",o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 

- O programa só deve ser encerrado ao escolher a opção de "sair",caso contrário deve voltar ao menu.
*/

const deck = [] //com os arrays é possivel a mudança em consts.
let option = 0

do {
    //menu
    option = Number(prompt(`Cartas no baralho: ${deck.length} 
    \n [1] - Adicionar uma carta
    \n [2] - Puxar uma carta 
    \n [3] - Sair`))

    //execução e validação das opções 
    switch (option) {
        case 1:
            let newCard = prompt('Qual é carta deseja adicionar ao baralho?')
            if (newCard) {
                alert('Adicionando carta...')
                alert('Prontinho!')
                deck.push(newCard)
            } else {
                alert('Nenhuma carta foi adicionada!')
            }
            break;
        case 2:
            const pullCard = deck.pop()
            if (!pullCard) {
                alert('Não há nenhuma carta no baralho')
            } else {
                alert('Puxando uma carta...')
                alert(`Carta puxada: ${pullCard}`)
            }
            break;
        case 3:
            alert('Saindo...')
            break;
        default:
            alert('Opção inválida!')
            break;
    }
} while (option !== 3);


