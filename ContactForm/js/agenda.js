const urlViaCep = "https:viacep.com.br/ws";

async function cadastrar(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const pais = document.getElementById('pais').value.trim();
    const ddd = document.getElementById('ddd').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cep = document.getElementById(' cep').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const complemento = document.getElementById('complemento').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('UF').value.trim();
}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json`

    try {
        const promisse = await fetch(urlViaCep+resource)

        const endereco = await promisse.json()
        console.log(`CEP: ${cep}`)
        console.log(endereco)

        document.getElementById("rua").value = `${endereco.logradouro}`
        document.getElementById("cidade").value = `${endereco.localidade}`
        document.getElementById("estado").value = `${endereco.uf}`

        document.getElementById("not-found").innerText = ''
    } catch (error) {
        console.log(error)
        document.getElementById("not-found").innerText = "CEP Invalido"
    }
}