
const filmes = [{
    nome : "Velozes e Furiosos",
    genero : "Acao",
    descricao: "Descricao"
},
{
    nome: "A freira 2",
    genero: "Terror",
    descricao: "Descricao"
}]

filmes.forEach( ( {nome,genero}, i ) => {
    // const {nome,genero} = f
    console.log(`
    Filme ${i + 1}: Nome: ${nome.toUpperCase()}
    Genero: ${genero.toUpperCase()}
`)

})




