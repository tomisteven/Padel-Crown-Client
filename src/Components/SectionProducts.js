import React from "react";
import { Button, Label } from "semantic-ui-react";
import icon_pelota from "../assets/tenis.webp";
import { toast } from "react-toastify";
import { Dna } from "react-loader-spinner";

export default function SectionProducts({
  products,
  setProducts,
  productsSelected,
  setProductImage,
  setOpen,
  setProductsSelected,
  setOnChange,
  onChange,
}) {
  const [load, setLoad] = React.useState(false);

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

  if (load) {
    return (
      <div className="section-products-load">
        <Dna
          visible={true}
          height="60"
          width="60"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  const ordernarPrecios = (t) => {
    if (t) {
      setLoad(true);
      setProducts(products.sort((a, b) => b.price - a.price));
      setOnChange(!onChange);
      setLoad(false);
    }else{
      setLoad(true);
      setProducts(products.sort((a, b) => a.price - b.price));
      setOnChange(!onChange);
      setLoad(false);
    }
  };

  return (
    <div className="section-products">
      <h5 className="title-section-two">
        {products.length} Productos disponibles para la venta online
      </h5>
      <button className="btn-ordenar"
        onClick={() => {
          ordernarPrecios(true);
        }}
      >
        Menor Precio
      </button>
      <button className="btn-ordenar"
        onClick={() => {
          ordernarPrecios(false);
        }}
      >
        Mayor Precio
      </button>
      <div className="container-products">
        {products.map((item, k) => (
          <div key={k} className="card-product">
            <h5
              className="ultimo-stock"
              style={
                item.cantidad === 0 ? { color: "red" } : { color: "white" }
              }
            >
              {" "}
              {item.cantidad === 0
                ? "Sin stock"
                : "Ultimo/s " + item.cantidad + " en Stock!"}
            </h5>
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
                  color={item.stock ? "orange" : "red"}
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
                    ) : null
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
