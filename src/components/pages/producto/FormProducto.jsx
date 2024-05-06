import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcionBreve, setDescripcionBreve] = useState("");
  const [descripcionAmplia, setDescripcionAmplia] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el precio del producto"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="imagenUrl">
        <Form.Label>URL de la Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la URL de la imagen del producto"
          value={imagenUrl}
          onChange={(e) => setImagenUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la categoría del producto"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descripcionBreve">
        <Form.Label>Descripción Breve</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ingrese una descripción breve del producto"
          value={descripcionBreve}
          onChange={(e) => setDescripcionBreve(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descripcionAmplia">
        <Form.Label>Descripción Amplia</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Ingrese una descripción amplia del producto"
          value={descripcionAmplia}
          onChange={(e) => setDescripcionAmplia(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear Producto
      </Button>
    </Form>
  );
};

export default FormProducto;
