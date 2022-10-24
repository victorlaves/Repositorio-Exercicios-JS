// exercicio 1

var array = []
var arrayTrueOrFalse = []

for (i = 0; i < 5; i++) {
    array[i] = parseInt(prompt("Digite um numero Positivo ou Negativo:"))

    if(array[i] > 0)
    arrayTrueOrFalse[i] = true
    else
    arrayTrueOrFalse[i] = false
}
console.log(array)
console.log(arrayTrueOrFalse)



