import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import FormProducto from "../pages/producto/FormProducto.jsx";
import ItemProducto from "./producto/ItemProducto";
import Swal from "sweetalert2";

const Administrador = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleMostrarModal = () => {
    setMostrarModal(true);
  };

  const handleCloseModal = () => {
    setMostrarModal(false);
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link to="/crear-producto" className="btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i> Crear Producto
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
