let valor // nao inicializada
console.log(valor)

valor = null // ausência de valor

// console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
// console.log(produto.preco.a) // Erro!

console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco

console.log(!!produto.preco)
console.log(produto)