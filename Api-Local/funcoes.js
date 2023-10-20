const urlViaCep = "https:viacep.com.br/ws"



function cadastrar (e) {
    e.preventDefault()
}

async function buscarEndereco(cep) {
const resource = `/${cep}/json`

try {
    const promisse = await fetch(urlViaCep+resource)
    const endereco = await promisse.json()
    console.log(`CEP: ${cep}`)
    console.log(endereco)

document.getElementById("endereco").value = `${endereco.logradouro}`
document.getElementById("cidade").value = `${endereco.localidade}`
document.getElementById("estado").value = `${endereco.uf}`
} catch (error) {
    console.log(error)
    document.getElementById("not-found").innerText = "CEP Invalido"
}
}
