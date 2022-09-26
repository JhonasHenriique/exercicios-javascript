//Proposta:

/*
 Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let option = ""

//loop
do {
  //dando opções
  option = Number(prompt(`
  Escolha uma das opções: 
  \n [1]Prosseguir 
  \n [2]Prosseguir 
  \n [3]Prosseguir
  \n [4]Prosseguir
  \n [5]Encerrar`))

  //exibindo resultados
  switch (option) {
    case 1:
      alert("Número escolhido: 1")
      break
    case 2:
      alert("Número escolhido: 2")
      break
    case 3:
      alert("Número escolhido: 3")
      break
    case 4:
      alert("Número escolhido: 4")
      break
    case 5:
      alert("Número escolhido: 5")
      break
  }
} while (option != 5);

alert("Encerrando Programa")