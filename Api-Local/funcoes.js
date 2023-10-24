const urlViaCep = "https:viacep.com.br/ws";
const urlCepProfessor = "http://172.16.35.155:3000/myceps";
const urlContatos = "http://172.16.35.155:3000/contatos";



async function cadastrar(e) {
    e.preventDefault()
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cep = document.getElementById(' cep').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();

    // FAZER VALIDACAO
    // if ( !validacaoForm(nome, email, cep, endereco, numero, cidade, estado) == false) {
    //     alert ("Preencher todos os campos necessarios")
    // }

    try {
        const promisse = await fetch('http://172.16.35.155:3000/contatos',{
            data: JSON.stringify(objCadastro),
            method: "post",
            headers:{"Content-Type" : "application/json"}
            
        });
        const dados = await promisse.json();

        console.log(dados)
    } catch (error) {
        console.log(error)
    }

}

// function validacaoForm(nome, email, cep, endereco, numero, cidade, estado) {
//     if (
//         nome.lenght == 0 || nome === undefined ||
//         email.lenght == 0 || email === undefined ||
//         endereco.lenght == 0 || endereco === undefined ||
//         cep.lenght != 8 || cep === undefined ||
//         numero.lenght < 1 || numero === undefined ||
//         cidade.lenght == 0 || cidade === undefined ||
//         estado.lenght == 0 || estado === undefined 
//     ) {
//         return false
//     }
//     return true
// }

async function buscarEndereco(cep) {
    //const resource = `/${cep}/json`

    try {
        //const promisse = await fetch(urlViaCep+resource)
        const promisse = await fetch(`${urlCepProfessor}/${cep}`)

        const endereco = await promisse.json()
        console.log(`CEP: ${cep}`)
        console.log(endereco)

        document.getElementById("endereco").value = `${endereco.logradouro}`
        document.getElementById("cidade").value = `${endereco.localidade}`
        document.getElementById("estado").value = `${endereco.uf}`

        document.getElementById("not-found").innerText = ''
    } catch (error) {
        console.log(error)
        document.getElementById("not-found").innerText = "CEP Invalido"
    }
}

