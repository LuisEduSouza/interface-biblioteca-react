import { useEffect, useState } from 'react';
import AlunoRequests from '../../../fetch/AlunoRequests';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

function TabelaAlunos() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAluno();
                setAlunos(listaDeAlunos)
            } catch (error) {
                console.error(`Erro ao chamar a API: ${error}`);
            }
        };

        fetchAlunos();
    }, [alunos]);
    
    const formatarData = (novaData: any) => {
        const data = new Date(novaData.dataNascimento);
        return data.toLocaleDateString('pt-BR');
    };

    return (
        <>
            <DataTable
                value={alunos}              // Dados que serão exibidos na tabela (lista de alunos)
                paginator                   // Ativa a paginação
                rows={50}                    // Quantos itens mostrar por página (5 nesse caso)
                tableStyle={{ minWidth: '50rem' }} // Define o estilo da tabela (mínimo de 50 rem de largura)
            >
                <Column field="nome" header="Nome"></Column>
                <Column field="sobrenome" header="Sobrenome"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="endereco" header="Endereço"></Column>
                <Column field="dataNascimento" body={formatarData} header="Data de nascimento"></Column>
                <Column field="celular" header="Celular"></Column>
            </DataTable>
        </>
    );
}

export default TabelaAlunos;