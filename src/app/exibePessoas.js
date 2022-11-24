const elementoParaInserirPessoas = document.querySelector('#mostraDados')
const divForm = document.querySelector('#divForm')

function exibeAsPessoas(pessoa){
         const IMC = pessoa.peso/(pessoa.altura)**2

        //let validacao = isNaN(pessoa.peso) ? alert('Peso inválido') : 0 || isNaN(pessoa.altura) ? alert('Altura inválida') : 0

        let classicacao = classificaIMC(pessoa)
        let emoji = emojiIMC(pessoa)

        divForm.classList.remove('teste')

        elementoParaInserirPessoas.innerHTML+= `
            <tr>
                <td>${pessoa.nome}</td>
                <td>${pessoa.peso}</td>
                <td>${pessoa.altura}</td>
                <td>${IMC.toFixed(2)}</td>
                <td>${classicacao}</td>
                <td><img src="${emoji}" alt="Ícone de classificação ${classicacao}"></td>
            </tr>
        `
}

function classificaIMC(pessoa){
    const IMC = pessoa.peso/(pessoa.altura)**2
    if(IMC < 18.5){
        return 'Magreza'
    }
    else if(IMC >= 18.5 && IMC < 24.9){
        return 'Normal'
    }
    else if(IMC >= 25 && IMC < 29.9){
        return 'Sobrepeso'
    }
    else if(IMC >= 30 && IMC < 39.9){
        return 'Obesidade'
    }
    else if(IMC >=  40){
        return 'Obesidade Grave'
    }
}

function emojiIMC(pessoa){
    const IMC = pessoa.peso/(pessoa.altura)**2
    if(IMC < 18.5){
        return 'src/img/magreza.png'
    }
    else if(IMC >= 18.5 && IMC < 24.9){
        return 'src/img/normal.png'
    }
    else if(IMC >= 25 && IMC < 29.9){
        return 'src/img/sobrepeso.png'
    }
    else if(IMC >= 30 && IMC < 39.9){
        return 'src/img/obesidade.png'
    }
    else if(IMC >=  40){
        return 'src/img/obesidade-grave.png'
    }
}