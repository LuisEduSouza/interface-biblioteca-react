import { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function TabelaEmprestimo() {
    const [emprestimos, setEmprestimos] = useState([]);

    useEffect(() => {
        const fetchEmprestimo= async () => {
            try {
                const listaDeEmprestimos = await EmprestimoRequests.listarEmprestimo();
                setEmprestimos(listaDeEmprestimos)
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };

        fetchEmprestimo();
    }, [emprestimos]);
    
    const formatarDataEmprestimo = (novaData: any) => {
        const data = new Date(novaData.dataEmprestimo);
        return data.toLocaleDateString('pt-BR');
    };

    const formatarDataDevolucao = (novaData: any) => {
        const data = new Date(novaData.dataDevolucao);
        return data.toLocaleDateString('pt-BR');
    };

    return (
        <>
            <DataTable
                value={emprestimos}              // Dados que serão exibidos na tabela (lista de alunos)
                paginator                   // Ativa a paginação
                rows={50}                    // Quantos itens mostrar por página (5 nesse caso)
                tableStyle={{ minWidth: '50rem' }} // Define o estilo da tabela (mínimo de 50 rem de largura)
            >
                <Column field="nomeAluno" header="Nome do aluno"></Column>
                <Column field="tituloLivro" header="Nome do livro"></Column>
                <Column field="dataEmprestimo" body={formatarDataEmprestimo} header="dataEmprestimo"></Column>
                <Column field="dataDevolucao" body={formatarDataDevolucao} header="Data de devolução"></Column>
                <Column field="statusEmprestimo" header="Status de empréstimo"></Column>
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;