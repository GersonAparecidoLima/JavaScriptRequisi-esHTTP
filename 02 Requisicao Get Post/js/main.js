//responsavel pela logica principal do carregamento da aplicação
//manipulação do formulario e carregamento principal da pagina

import ui from "./ui.js"
import api from "./api.js"


document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded siginifica quando o html terminou de ser carregado
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamento({ conteudo, autoria })
        ui.renderizarPensamentos()
    }
    catch {
        alert("Erro ao salvar pensamento")
    }

}