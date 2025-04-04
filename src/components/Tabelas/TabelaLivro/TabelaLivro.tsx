import { useEffect, useState } from 'react';
import LivroRequests from '../../../fetch/LivroRequests';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

function TabelaLivros() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivro();
                setLivros(listaDeLivros)
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };

        fetchLivro();
    }, [livros]);
    
    const formatarDinheiro = (novoValor: any) => {
        return Number(novoValor.valorAquisicao).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <>
            <DataTable
                value={livros}             
                paginator                   // Ativa a paginação
                rows={50}                    // Quantos itens mostrar por página (5 nesse caso)
                tableStyle={{ minWidth: '50rem' }} // Define o estilo da tabela (mínimo de 50 rem de largura)
            >
                <Column field="titulo" header="Título"></Column>
                <Column field="autor" header="Autor"></Column>
                <Column field="editora" header="Editora"></Column>
                <Column field="anoPublicacao" header="Ano de  Pubiblicação"></Column>
                <Column field="isbn" header="ISBN"></Column>
                <Column field="quantTotal" header="Quantidade Total"></Column>
                <Column field="quantDisponivel" header="quantDisponivel"></Column>
                <Column field="valorAquisicao" body={formatarDinheiro} header="Valor de Aquisição"></Column>
                <Column field="statusLivroEmprestado" header="Status do Livros"></Column>
            </DataTable>
        </>
    );
}

export default TabelaLivros;