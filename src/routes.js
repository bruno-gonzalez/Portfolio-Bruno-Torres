import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./pages/Inicio";
import Footer from "./componentes/Footer";
import Sobre from "./pages/Sobre";
import Contato from "./componentes/Contato";
import ProjetosPage from "./pages/ProjetosPage";

function AppRoutes(){
   return(
      <BrowserRouter>
         <Cabecalho />
         <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="sobre" element={<Sobre />}/>
            <Route path="projetos" element={<ProjetosPage />}/>
         </Routes>
         <Contato />
         <Footer />
      </BrowserRouter>
   )
}

export default AppRoutes;