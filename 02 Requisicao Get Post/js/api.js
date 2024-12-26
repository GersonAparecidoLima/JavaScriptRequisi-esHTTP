//Requicisão
const api = {
    //Por padrão o fetch faz um get
    async buscarPensamentos() {

        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        }
        catch {
            alert('erro ao buscar os pensamentos');
            throw error;

        }
    },

    //POST enviando uma informação
    //Informando o tipo de conteudo da requicição -   "Content-Type": "application/json"
    //Convert um objeto js para um formato que api entende JSON.stringify - string json
    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return await response.json()
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    }


}

export default api;