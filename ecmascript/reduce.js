const numeros = [10,12,20]

//reduzir o array em um unico valor
const somatorio = numeros.reduce((total,n) => {
    return total + n
},0)

//console.log(somatorio)


const produtos = [
    {produto: "camisa", preco: 200},
    {produto: "calca", preco: 230},
    {produto: "tenis", preco: 450}
]

const valorTotal = produtos.reduce((valorInicial,prod) => {
    return valorInicial + prod.preco
},0)

console.log(valorTotal)

let comissao = produtos.reduce((vlInicial, prod) => {
    return vlInicial + (prod.preco * 0,05)
},0)

let nome = "Eduardo Pasqualetti"

console.log(`comissao de ${nome} deste mes: RS${comissao}`)




const objVendedor = {
    vendedor,
    comissao,
    idade: 40
}

console.log(objVendedor)