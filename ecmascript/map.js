const numeros = [1, 2, 3, 4, 5]

const arrayDobro = numeros.map((n) => {
    return n * 2
})

//console.log(arrayDobro)

// ---------EXERCICIO------------  


const Nomes = ['Eduardo','Gabriel','Vinicius','Joao','Gabriel']
const Sobrenomes = ['Pasqualetti','Demetrio','Grana','Alves','Victor']

const nomeCompleto = Nomes.map((nome,indice) =>  {
    return `${nome}  ${Sobrenomes[indice]}`
})

nomeCompleto.forEach((nc) => {
    console.log(nc)
})