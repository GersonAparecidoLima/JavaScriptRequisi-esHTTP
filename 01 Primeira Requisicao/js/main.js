//responsavel pela logica principal do carregamento da aplicação
//manipulação do formulario e carregamento principal da pagina

import ui from "./ui.js"

document.addEventListener("DOMContentLoaded", () => {
    //DOMContentLoaded siginifica quando o html terminou de ser carregado
    ui.renderizarPensamentos()
})
