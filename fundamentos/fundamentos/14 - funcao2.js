// Armazenando uma funcao anônima em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 4))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(1, 9))


// Um so parametro
const imprimir2 = a => console.log(a)

imprimir2('legal!!!!')