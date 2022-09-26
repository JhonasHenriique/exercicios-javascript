//Proposta:

/*
Escreva um programa que permita inserir o nome e o AP(poder de ataque) de um personagem,depois o nome,a
quantidade de HP(vida),o poder de DEF(defesa) de outro personagem e se ele possui um escudo, e então
calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o AP for maior do que a DEF e o P2 não possuir um escudo: O dano causado será igual a diferença
entre o AP e a DEF.
- Se o AP for maior do que a DEF e o defensor não possuir um escudo: O dano causado será igual a metade
da diferença entre o AP e a DEF.     
- Se o AP for menor ou igual a DEF: O dano causado será 0.
        
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/

//atribuindo valores do atacante
const nameP1 = prompt("Qual o nome do personagem?")
const attack = prompt("Qual o poder de ataque(AP) do seu personagem?")

//atribuindo valores do defensor
const nameP2 = prompt("Qual o nome do Segundo Personagem?")
const life = prompt("Quantos pontos de vida(HP) tem o seu personagem?")
const defense = prompt("Quanto de defesa(DEF) tem o seu personagem?")
const shield = confirm("O seu personagem possui um escudo?")


//convertendo as strinngs
const ap = parseFloat(attack)
const hp = parseFloat(life)
const def = parseFloat(defense)

//calculo de dano
const dg = (ap <= def) ? 0
    : (ap > def && shield == true) ? ap - def
        : (ap > def && shield == false) ? (ap - def) / 2
            : "Informe os dados novamente";

//calculo de vida após o ataque
const newHp = hp - dg

//exibindo resultados
alert(`
 ${nameP2} recebeu ${dg} de dano de ${nameP1}
 \n ============================================
 \n Personagem: ${nameP1} 
 \n Poder de Ataque : ${ap} 
 \n ============================================
 \n Personagem: ${nameP2} 
 \n Vida: ${newHp}
`)