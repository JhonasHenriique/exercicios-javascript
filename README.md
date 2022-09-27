# Exercícios de JavaScript

Exercícios feitos durante o módulo de javascript e lógica de programação 1 da OneBitCode

### Tópicos

- [Calculadora Automatica - ex1.1](#calculadora-automatica)
- [Recrutamento - ex1.2](#recrutamento)
- [Atacante e Defensor - ex2.1](#atacante-e-defensor)
- [Teste de Velocidade - ex2.2](#teste-de-velocidade)
- [Conversor de Medidas - ex3](#conversor-de-medidas)
- [Turismo - ex4](#turismo)
- [Menu Interativo - ex5.1](#menu-interativo)
- [Poupança - ex5.2](#poupança)
- [Calculadora Robo - ex6.1](#calculadora-robo)
- [Teste de Palindromo - ex6.2](#teste-de-palindromo)

## Calculadora Automatica

### Proposta 

Escreva um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma,subtração,multiplicação e divisão)

Após calcular os resultados o programa deve exibi-los na tela.

### Aprendido

- variáveis e atribuição de valores
  - const
- conversão de tipos
  - parseFloat()
- alert e prompt
  - interpolação

## Recrutamento

### Proposta 

Escreva um programa em javascript que permita salvar informações de um recruta. As informações salvas são: 

- Primiro nome
- Sobrenome
- Campo de estudo
- Ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

### Aprendido

- variáveis
  - let
  - camelCase
- resgate de data atual
  - new Date() e o método getFullYear()
  
## Atacante e Defensor 

### Proposta

Escreva um programa que permita inserir o nome e o AP(poder de ataque) de um personagem,depois o nome,a
quantidade de HP(vida),o poder de DEF(defesa) de outro personagem e se ele possui um escudo, e então
calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o AP for maior do que a DEF e o P2 não possuir um escudo: O dano causado será igual a diferença
entre o AP e a DEF.
- Se o AP for maior do que a DEF e o defensor não possuir um escudo: O dano causado será igual a metade
da diferença entre o AP e a DEF.     
- Se o AP for menor ou igual a DEF: O dano causado será 0.
        
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

### Aprendido

- estruturas condicionais if e else
- operador ternário

## Teste de Velocidade

### Proposta 

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso).

### Aprendido

- else if 

## Conversor de Medidas

### Proposta 

Escreva um programa em javascript que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido.As opções são:

- milímetro(mm)
- centímetro(cm)
- decímetro(dm)
- decâmetro(dam)
- hectômetro(hm)
- quilômetro(km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).

### Aprendido 

- estrutua condicional switch

## Turismo

### Proposta

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim,
pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não.
No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.
   
### Aprendido

- estrutura de repetição while
- concatenação de strings em váriaveis

## Menu Interativo

### Proposta

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.


### Aprendido

- noção de escopo
- estrutura de repetição do while

## Poupança

### Proposta

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e
então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de
sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada,
somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as
opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve
encerrar o programa.


### Aprendido

-  Number()

## Calculadora Robo

### Proposta

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número(de 1 a 20).O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string.Depois deve exibir esses resultados e finalizar.

### Aprendido

- estrutura de repetição for

## Teste de Palindromo

### Proposta

Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma plavra que lida de trás para frente possui as mesmas letra na mesma ordem. O programa deve iniciar pedindo que seja informada uma palabvra e então exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.

### Aprendido

- propriedade length e length - 1
