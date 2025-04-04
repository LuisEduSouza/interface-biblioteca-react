import { SERVER_CFG } from "../appConfig";

class EmprestimoRequests {
    private serverURL;
    private routeListarEmprestimo;
    private routeCadastroEmprestimo;
    private routeAtualizaEmprestimo;
    private routeRemoveEmprestimo;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListarEmprestimo = '/lista/emprestimos'; // ROTAS CONFIGURADAS NO API
        this.routeCadastroEmprestimo = '/novo/emprestimos'; // ROTAS CONFIGURADAS NO API
        this.routeAtualizaEmprestimo = '/atualizar/emprestimos'; // ROTAS CONFIGURADAS NO API
        this.routeRemoveEmprestimo = '/remover/emprestimos'; // ROTAS CONFIGURADAS NO API
    }
    /**
     * Função que busca a lista de livros na API
     */
    async listarEmprestimo() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListarEmprestimo}`);

            if (respostaAPI.ok) {
                const listaDeEmprestimos = await respostaAPI.json();
                return listaDeEmprestimos;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new EmprestimoRequests();