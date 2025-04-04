import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaAlunos from "../../components/Tabelas/TabelaAluno/TabelaAluno";
import Rodape from "../../components/Rodape/Rodape";

function PListarAluno(){
    return(
        <>
            <Cabecalho />
            <TabelaAlunos/>
            <Rodape />
        </>
    );
}

export default PListarAluno;