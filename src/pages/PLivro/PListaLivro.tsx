import Cabecalho from "../../components/Cabecalho/Cabecalho";
import TabelaLivros from "../../components/Tabelas/TabelaLivro/TabelaLivro";
import Rodape from "../../components/Rodape/Rodape";

function PListarLivro(){
    return(
        <>
            <Cabecalho />
            <TabelaLivros/>
            <Rodape />
        </>
    );
}

export default PListarLivro;