import { BrowserRouter, Routes, Route } from "react-router-dom";
import PHome from "./pages/PHome/PHome";
import PLogin from "./pages/PLogin/PLogin";
import PListarAluno from "./pages/PAluno/PListarALuno";
import PListarEmprestimo from "./pages/PEmprestimo/PListarEmprestimo";
import PListarLivro from "./pages/PLivro/PListaLivro";
import { APP_ROUTES } from "./appConfig";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>} />
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>} />
                <Route path={APP_ROUTES.ROUTE_LISTAR_ALUNO} element={<PListarAluno/>} />
                <Route path={APP_ROUTES.ROUTE_LISTAR_LIVRO} element={<PListarLivro/>} />
                <Route path={APP_ROUTES.ROUTE_LISTAR_EMPRESTIMO} element={<PListarEmprestimo/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;