//Seleção dos elementos
let pessoas = []
const endpointDoJSON = '../../imc-data.json'

//Funções
console.log(` __  ___  __  .___  ___.  __   __  \r\n|  |\/  \/ |  | |   \\\/   | |  | |  | \r\n|  \'  \/  |  | |  \\  \/  | |  | |  | \r\n|    <   |  | |  |\\\/|  | |  | |  | \r\n|  .  \\  |  | |  |  |  | |__| |__| \r\n|__|\\__\\ |__| |__|  |__| (__) (__) \r\n                                   `)

async function getBuscarPessoasDoJSON(){
    const res = await fetch(endpointDoJSON)
    pessoas = await res.json()
    pessoas.forEach(pessoa=>{
        exibeAsPessoas(pessoa)
    })
}

//Eventos
getBuscarPessoasDoJSON()