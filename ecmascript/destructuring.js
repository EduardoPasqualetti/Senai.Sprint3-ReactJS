const camisaLacoste = {
    descricao: "Camisa Polo",
    preco: 299.99,
    tamanho: "G",
    cor: "Verde",
    presente: false
}


const {descricao, presente} = camisaLacoste
const {preco} = camisaLacoste



console.log(`
PRODUTO:
    Descricao: ${descricao}
    Preco: ${preco}
    Presente: ${presente ? "sim" : "nao"}
    `)


    