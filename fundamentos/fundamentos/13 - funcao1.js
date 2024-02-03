// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 8, 4 , 5)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(1))
console.log(soma(3, 5))
console.log(soma)