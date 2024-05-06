import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container">
      <h1 className="display-3 mt-5">Nuevo producto</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del producto"
            {...register("nombre", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como mínimo 2 caracteres para el nombre del producto",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como máximo 50 caracteres para el nombre del producto",
              },
            })}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el precio del producto"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Ingrese un precio válido",
              },
            })}
          />
          {errors.precio && <span>{errors.precio.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagenUrl">
          <Form.Label>URL de la Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la URL de la imagen del producto"
            {...register("imagenUrl", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /^(ftp|http|https):\/\/[^ "]+$/,
                message: "Ingrese una URL válida",
              },
            })}
          />
          {errors.imagenUrl && <span>{errors.imagenUrl.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            as="select"
            {...register("categoria", {
              required: "La categoría del producto es obligatoria",
            })}
          >
            <option value="">Seleccionar Categoría</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="Dulces">Dulces</option>
            <option value="Salado">Salado</option>
            <option value="Sandwich">Sandwich</option>
          </Form.Control>
          {errors.categoria && <span>{errors.categoria.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionBreve">
          <Form.Label>Descripción Breve</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingrese una descripción breve del producto"
            {...register("descripcionBreve", {
              maxLength: {
                value: 200,
                message:
                  "Debe ingresar como máximo 200 caracteres para la descripción breve del producto",
              },
            })}
          />
          {errors.descripcionBreve && (
            <span>{errors.descripcionBreve.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionAmplia">
          <Form.Label>Descripción Amplia</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Ingrese una descripción amplia del producto"
            {...register("descripcionAmplia", {
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como máximo 500 caracteres para la descripción amplia del producto",
              },
            })}
          />
          {errors.descripcionAmplia && (
            <span>{errors.descripcionAmplia.message}</span>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear Producto
        </Button>
      </Form>
    </section>
  );
};

export default FormProducto;
