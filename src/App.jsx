import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormProducto from "./components/pages/producto/FormProducto"; // Asegúrate de importar el componente FormProducto
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/administrador" element={<Administrador />} />
        <Route exact path="/crear-producto" element={<FormProducto />} /> {/* Asegúrate de que esta ruta esté configurada */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
