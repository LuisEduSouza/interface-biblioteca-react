import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaEmprestimo from "../../components/Tabelas/TabelaEmprestimo/TabelaEmprestimo";
import Rodape from "../../components/Rodape/Rodape";

function PListarEmprestimo(){
    return(
        <>
            <Cabecalho />
            <TabelaEmprestimo/>
            <Rodape />
        </>
    );
}

export default PListarEmprestimo;