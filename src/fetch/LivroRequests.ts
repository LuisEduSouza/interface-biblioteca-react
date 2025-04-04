import { SERVER_CFG } from "../appConfig";

class LivroRequests {
    private serverURL;
    private routeListarLivro;
    private routeCadastroLivro;
    private routeAtualizaLivro;
    private routeRemoveLivro;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListarLivro = '/lista/livros'; // ROTAS CONFIGURADAS NO API
        this.routeCadastroLivro = '/novo/livro'; // ROTAS CONFIGURADAS NO API
        this.routeAtualizaLivro = '/atualizar/livro'; // ROTAS CONFIGURADAS NO API
        this.routeRemoveLivro = '/remover/livro'; // ROTAS CONFIGURADAS NO API
    }
    /**
     * Função que busca a lista de livros na API
     */
    async listarLivro() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListarLivro}`);

            if (respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests();