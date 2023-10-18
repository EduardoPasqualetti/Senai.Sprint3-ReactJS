const numero = [1,2,200,10,7,15,6]

//console.log(numero)

const nMenorq10 = numero.filter((n) => {
    return n < 10
})

//console.log(nMenorq10)

const doisDuzentos = numero.filter((n) => {
    return n === 2 || n == "200"
})

//console.log(doisDuzentos)







const comentarios = [
    {comentario : "bla bla bla ", exibe : true},
    {comentario: "Evento merda", exibe : false},
    {comentario: "Otimo evento", exibe : true}
]

const comentarioOK = comentarios.filter((c) => {
    return c.exibe == true
})
//console.log(comentarioOK)