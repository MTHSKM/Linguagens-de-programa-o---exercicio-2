const form = document.getElementById('cadastroPessoasForm')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const peso = evento.target.elements['peso']
    const altura = evento.target.elements['altura']

    const pessoaAtual ={
        'nome': nome.value,
        'peso': peso.value,
        'altura': altura.value,
    }

    exibeAsPessoas(pessoaAtual)
})