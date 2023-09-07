import React from "react";
import { Button, Label } from "semantic-ui-react";
import icon_pelota from "../assets/tenis.webp";
import { toast } from "react-toastify";

export default function SectionProducts({
  products,
  productsSelected,
  setProductImage,
  setOpen,
  setProductsSelected,
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
        {products.length}
        {" "} Productos disponibles para la venta online
      </h5>
      <div className="container-products">
        {products.map((item, k) => (
          <div key={k} className="card-product">
            <h5 className="ultimo-stock">Ultimos {
              Math.floor(Math.random()*7) + 1 === 0 ? null : Math.floor(Math.random()*7) + 1
            } en Stock!</h5>
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
                    className="btn-buy"
                    as="a"
                    content={"Ver en Tienda Onlinne"}
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
                  color={
                    item.stock ? "orange" : "red"
                  }
                  size="tiny"
                  icon={item.stock ? "shop" : "ban"}
                  label={
                    item.stock ? (
                      <Label className="label-btn-add" size="tiny" color="blue">
                        $
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(item.price)}
                      </Label>
                    ) : (
                      null
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
  );
}
