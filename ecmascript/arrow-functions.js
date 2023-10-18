const numeros = [1,2,5,10]

// CALBACK FUNCTIONS

// numeros.forEach(
//     function Carlos(cadaNumero) {
//         console.log(`numero ` + cadaNumero);
//     }
// );

const mesa = ['Eduardo', 'Paulo','Anna','Eduardo']

// IDENTACAO MAIS AVANCADA

// mesa.forEach(function (c) {
//         console.log(`Bom dia ` + c)
//     }
// );


// ARROW FUNCTIONS

// usando expressoa lambida

mesa.forEach( (cadaPessoa) => {
    console.log("Bom dia " + cadaPessoa)
})


// 1- RETURN EXPLICITO
const dobro = (x) => {
    return x * 2;
}
console.log(dobro(20))

// 2- FORMA SIMPLICADA COM RETURN IMPLICITO
const dobro2 = (x) => x * 2;
console.log(dobro2(10))

// 3-
const bomDia = () => "Bom dia"; // retorna o texto bom dia
console.log(bomDia())