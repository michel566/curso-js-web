function rand({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = rand({max: 50, min: 40})
console.log(obj)
console.log(rand({ min: 955}))
console.log(rand({}))

//vai dar problema
// console.log(rand())

