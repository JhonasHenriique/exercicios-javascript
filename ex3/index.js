//Proposta:

/* 
Escreva um programa em javascript que funcione como um conversor de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido.As opções são:

- milímetro(mm)
- centímetro(cm)
- decímetro(dm)
- decâmetro(dam)
- hectômetro(hm)
- quilômetro(km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de "Opção inválida" caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).
*/

//atribuindo valores
const measure = prompt("Digite um valor em metros : ")

const unity = prompt(`Valor digitado: ${measure}m
\n Para qual medida deseja converter? \n 
1 - milímetro(mm)
2 - centímetro(cm)
3 - decímetro(dm)
4 - decâmetro(dam)
5 - hectômetro(hm)
6 - quilômetro(km)`)

//conversão e exibição do resultado
switch (unity) {
    case "1":
        alert(`Resultado: ${measure}m = ${measure * 1000}mm`)
        break
    case "2":
        alert(`Resultado: ${measure}m = ${measure * 100}cm`)
        break
    case "3":
        alert(`Resultado: ${measure}m = ${measure * 10}dm`)
        break
    case "4":
        alert(`Resultado: ${measure}m = ${measure / 10}dam`)
        break
    case "5":
        alert(`Resultado: ${measure}m = ${measure / 100}hm`)
        break
    case "6":
        alert(`Resultado: ${measure}m = ${measure / 1000}km`)
        break
    default:
        alert("Opção Inválida")
}


