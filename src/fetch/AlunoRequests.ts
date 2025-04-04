import { SERVER_CFG } from "../appConfig";

class AlunoRequests {
    private serverURL;
    private routeListarAluno;
    private routeCadastroAluno;
    private routeAtualizaAluno;
    private routeRemoveAluno;

    constructor() {
        this.serverURL = SERVER_CFG.SERVER_URL;
        this.routeListarAluno = '/lista/alunos'; // ROTAS CONFIGURADAS NO API
        this.routeCadastroAluno = '/novo/aluno'; // ROTAS CONFIGURADAS NO API
        this.routeAtualizaAluno = '/atualizar/aluno'; // ROTAS CONFIGURADAS NO API
        this.routeRemoveAluno = '/remover/aluno'; // ROTAS CONFIGURADAS NO API
    }
    /**
     * Função que busca a lista de alunos na API
     */
    async listarAluno() {
        try {
            const respostaAPI = await fetch(`${this.serverURL}${this.routeListarAluno}`);

            if (respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.error(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequests();