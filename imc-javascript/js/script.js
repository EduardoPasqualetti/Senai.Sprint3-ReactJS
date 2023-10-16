const arrPessoas = []

function calcular(e) {
    e.preventDefault() // capturar o evento de submit do formulario

    //pegar os dados do form e validar se estao preenchidos
    const nome = document.getElementById('nome').value.trim()
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)


    // validacao do formulario
    if (isNaN(altura) || isNaN(peso) || nome.length == 0) {
        alert("Necessario preencher os dados corretamnte")
        return
    }

    // criado variaveis que o valor sera o retorno da funcao chamada
    const imc = calcularImc(altura, peso)

    const txtSituacao = retornaSituacao(imc)


    let pessoa = { nome, altura, peso, imc, situacao: txtSituacao }

    arrPessoas.push(pessoa)

    ListarPessoas()
}

// Funcao de calcular o imc e o retorna
function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2)
}

// Funcao que retorna o a situacao da pessoa de acordo com o imc
function retornaSituacao(imc) {
    if (imc <= 18.5) {
        return "Magreza Severa"
    } else if (imc <= 24.99) {
        return "Peso Normal"
    } else if (imc <= 29.99) {
        return "Acima do peso"
    } else if (imc <= 34.99) {
        return "Obesidade I"
    } else if (imc <= 39.99) {
        return "Obesidade Severa"
    } else {
        return "Cuidado"
    }
}

// Listar as pessoas na
function ListarPessoas() {

    console.log(arrPessoas)

    arrPessoas.forEach(p => console.log(p.nome, p.imc.toFixed(2), p.situacao))

    let template = ""

    arrPessoas.forEach((p) => {
        template +=`
        <tr> 
            <td>${p.nome}</td>
            <td>${p.altura}</td>
            <td>${p.peso}</td>
            <td>${p.imc.toFixed(2)}</td>
            <td>${p.situacao}</td>
        </tr>`
    });

    document.getElementById('cadastro').innerHTML = template
}