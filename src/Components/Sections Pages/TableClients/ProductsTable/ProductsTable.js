import React, { useState, useContext } from "react";
import "./ProductsTable.css";
import { GlobalContext } from "../../../../context/GlobalState";
import { Button, Input, Image, Select } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";

import { Product } from "../../../../api/product";

const productController = new Product();

const Producto = ({ producto }) => {
  const [formValues, setFormValues] = useState({
    name: producto.name,
    category: producto.category,
    price: producto.price,
    stock: producto.stock,
    image: producto.image,
    cantidad: producto.cantidad,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (e, { name, value }) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }


  const handleEditClick = async () => {
    formValues.price = parseInt(formValues.price);
    formValues.cantidad = parseInt(formValues.cantidad);

     const res = await productController.editProduct(formValues, producto._id);
    res
      ? toast.success("Producto editado con exito", { autoClose: 1000 })
      : toast.error("Error al editar producto", { autoClose: 1000 });

    /* setTimeout(() => {
      window.location.reload();
    }, 1000); */

    console.log("Editando:", formValues);
  };

  const handleDeleteClick = () => {
    // Lógica para manejar la eliminación del producto
    console.log("Eliminando:", producto._id);
  };

  return (
    <div className="producto-table">
      <div className="producto-table__info">
        <Image src={formValues.image} size="small" centered />
        <Input
          className="input-producto"
          size="small"
          label="Nombre"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
          fluid
        />
        <Input
          className="input-producto"
          size="small"
          label="Precio"
          name="price"
          fluid
          onChange={handleInputChange}
          value={formValues.price}
        />
        <Input
          className="input-producto"
          size="small"
          label="Categoria"
          onChange={handleInputChange}
          value={formValues.category}
          name="category"
        />
        <Select
          placeholder="Stock"
          options={[
            { key: "1", value: "true", text: "Hay Stock ? " },
            { key: true, value: true, text: "Si" },
            { key: false, value: false, text: "No" },
          ]}
          name="stock"
          onChange={handleSelectChange}
          value={formValues.stock}

          fluid
        />
        <Input
          className="input-producto"
          size="small"
          label="Imagen"
          fluid
          onChange={handleInputChange}
          name="image"
          value={formValues.image}
        />
        <Input
          className="input-producto"
          size="small"
          label="Cantidad"
          fluid
          onChange={handleInputChange}
          name="cantidad"
          value={formValues.cantidad}
        />
      </div>
      <div className="producto-table__actions">
        <Button
          color="green"
          size="small"
          className="btn-editar"
          onClick={handleEditClick}
        >
          Editar
        </Button>
        <Button
          color="red"
          size="small"
          className="btn-eliminar"
          onClick={handleDeleteClick}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
};

const ListaProductos = () => {
  const [productos, setProductos] = useContext(GlobalContext);

  return (
    <div className="cont-productos-table">
      {productos.map((producto) => (
        <Producto key={producto._id} producto={producto} />
      ))}
      <ToastContainer />
    </div>
  );
};

export default ListaProductos;
