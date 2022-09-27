//Proposta

/*
Escreva um programa em javascript que seja capaz de identificar se uma palabra é um palíndromo. Um palíndromo é uma plavra que lida de trás para frente possui as mesmas letra na mesma ordem. O programa deve iniciar pedindo que seja informada uma palabvra e então exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/


//atribuindo valores
let word = prompt("Informe a palavra que deseja conferir se é um palíndromo ou não: ")
let palindrome = ""

//invertendo a string e atribuindo a variável
for (let i = word.length - 1; i >= 0; i--) {
    palindrome += word[i];
}

//exibindo resultados de acordo com a condicional
if (palindrome == word) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra informada não é um palíndromo: ${word} , ${palindrome}`)
}
