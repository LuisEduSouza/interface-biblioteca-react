import estilo from './Cabecalho.module.css';
import logotipo from '../../assets/logotipo.png';
import {APP_ROUTES} from '../../appConfig';

function Cabecalho() {
    return (
        <header className={estilo.cabecalho}>
            <a href={APP_ROUTES.ROUTE_HOME}
            className={estilo.logo}>
                <img src={logotipo} alt="logotipo" />
            </a>
            <a href={APP_ROUTES.ROUTE_LOGIN}>Login</a>
            <a href={APP_ROUTES.ROUTE_LISTAR_ALUNO}>ALUNO</a>
            <a href={APP_ROUTES.ROUTE_LISTAR_LIVRO}>LIVRO</a>
            <a href={APP_ROUTES.ROUTE_LISTAR_EMPRESTIMO}>EMPRESTIMO</a>
        </header>
    );
}

export default Cabecalho;