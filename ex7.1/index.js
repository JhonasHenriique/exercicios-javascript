//Proposta :

/*

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 

- O programa deve iniciar mostrando na tela um menu interativo contanto a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome(ex: 1°Marcos, 2°Matheus,etc). 

- O menu também deve permitir escolher entre as opções de "Novo paciente",para adicionar um novo paciente ao fim da fila
(pedindo o nome do paciente)

- "Consultar paciente",que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado

- "Sair".O programa só deve ser encerrado ao escolher a opção de "Sair",caso contrário deve voltar ao menu.

*/

let queue = []
let option = 0

do {

    let patient = ''
    for (let i = 0; i < queue.length; i++) {
        patient += (i + 1) + '° - ' + queue[i] + "\n"
    }

    option = Number(prompt(` Pacientes:
    \n${patient}
    \n Escolha uma ação: 
    \n [1] - Novo paciente
    \n [2] - Consultar paciente 
    \n [3] - Sair`))

    switch (option) {
        case 1:
            const newPatient = prompt('Qual é o nome do paciente?:')
            if (newPatient) {
                alert(`Adicionando ${newPatient} à fila...`)
                queue.push(newPatient)
            } else {
                alert('Nenhum paciente adicionado a fila!')
            }
            break;
        case 2:
            const patientConsulted = queue.shift()
            //verifica se a string foi digitada
            if (patientConsulted) {
                alert(`${patientConsulted} foi consultado!`)
            } else {
                alert('Não há pacientes na fila!')
            }

            break
        case 3:
            alert('Encerrando...')
            break
        default:
            break;
    }

} while (option !== 3)


