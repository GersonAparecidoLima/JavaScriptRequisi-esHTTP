//Requicisão
const api = {

    async buscarPensamentos() {

        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        }
        catch {
            alert('erro ao buscar os pensamentos');
            throw error;

        }
    }

}

export default api;