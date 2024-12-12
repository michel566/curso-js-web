const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
const template2 = 
`
Olá
tudo bem
${nome}
${1+1}
`

console.log(concatenacao, template, template2)

// espressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)

