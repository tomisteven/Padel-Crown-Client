import React from 'react'
import { Button, Label } from 'semantic-ui-react'
import icon_pelota from "../assets/tenis.png";
import { toast } from "react-toastify";

export default function SectionProducts({
    products,
    productsSelected,
    setProductImage,
    setOpen,
    setProductsSelected
}) {

    const addItems = (item) => {
        toast.success("Producto agregado al carrito", {
          position: "top-right",
          theme: "dark",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        setProductsSelected([...productsSelected, item]);

      };


  return (
    <div className="section-products">
          <h5 className="title-section-two">
            {productsSelected.length > 0
              ? productsSelected.length
              : products.length}{" "}
            Productos
          </h5>
          <div className="container-products">
            {products.map((item, k) => (
              <div key={k} className="card-product">
                <img
                  onClick={() => {
                    setProductImage(item);
                    setOpen(true);
                  }}
                  className="img-product"
                  src={item.image}
                  alt=""
                />
                <div className="card-body">
                  <div className="cont-name">
                    <h5 className="card-body-name">{item.name}</h5>

                    <Label
                      as="a"
                      content={"Comprar en Tienda Onlinne"}
                      color={"green"}
                      icon="shopping cart"
                      onClick={() => {
                        window.open(item.url, "_blank");
                      }}
                    />
                  </div>
                  <p className="card-body-description">
                    {item.description ? (
                      item.description.map((d, i) => (
                        <div className="cont-description-span-item" key={i}>
                          <img
                            className="img-description-span"
                            src={icon_pelota}
                            alt=""
                          />
                          <span className="item-descrpition-span" key={i}>
                            {d}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span>Sin descripcion</span>
                    )}
                  </p>
                  <div className="cont-colors">
                    {item.formato ? (
                      item.formato.map((f, i) => (
                        <Label
                          size="tiny"
                          className="colors-product"
                          color={"blue"}
                          key={i}
                        >
                          {f}
                        </Label>
                      ))
                    ) : (
                      <Label circular key={"sc"} color="grey">
                        Redonda
                      </Label>
                    )}
                  </div>
                  <div className="cont-price">
                    <Button
                      className="btn-add-cart"
                      disabled={!item.stock}
                      color="orange"
                      size="mini"
                      icon="add"
                      label={
                        item.stock ? (
                          <Label size="tiny" color="blue">
                            $
                            {new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "ARS",
                            }).format(item.price)}
                          </Label>
                        ) : (
                          <Label size="tiny" color="red">
                            Sin Stock
                          </Label>
                        )
                      }
                      onClick={() => {
                        addItems(item);
                      }}
                    ></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}
