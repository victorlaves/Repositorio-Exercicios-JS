// exercicio 2

var array = []
for (i = 0; i < 5; i++) {
    var numbers = parseInt(prompt("Digite um numero"))
    for (var iNumbers = 0; iNumbers < 5; iNumbers++) {
        if (numbers == array[iNumbers]) {
            numbers = parseInt(prompt("Digite outro numero, esse ja foi adicionado"))
            iNumbers--
        }

    }
    iNumbers = 0
    array[i] = numbers
}
console.log("Numeros:" + array)



