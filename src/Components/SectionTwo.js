import React, { useEffect, useState, useContext } from "react";
import { Dna } from "react-loader-spinner";
import "./SectionTwo.css";
import "./responsiveSectionTwo.css";
import icon_pelota from "../assets/tenis.png";
import { Label, Menu, Button, Dropdown, Modal, Image } from "semantic-ui-react";
import swal from "sweetalert";
import { GlobalContext } from "../context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SectionTwo() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [productsSelected, setProductsSelected] = useState([]);
  const [stateCart, setStateCart] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [productImage, setProductImage] = useState({});

  const categorias = [
    "Fibra de Carbono",
    "Fibra de Vidrio",
    "Foam",
    "Eva",
    "Evasoft",
    "Sin Ploteo",
    "Control",
    "Potencia",
    "Nada"
  ];

  const $productos = useContext(GlobalContext);

  const [products, setProducts] = useState(useContext(GlobalContext));
  const [productsCategory, setProductsCategory] = useState(
    useContext(GlobalContext)
  );
  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [products]);

  if (loading) {
    return (
      <Dna
        visible={true}
        height="60"
        width="60"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }

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

  const sendWhatssap = () => {
    const message =
      "Hola, me gustaria comprar los siguientes productos: " +
      productsSelected.map((item) => item.name).join(", ") +
      " que vi en la Web Gracias!";

    const url = `https://api.whatsapp.com/send?phone=1134750981&text=${message}`;
    window.open(url, "_blank");
  };

  const filterData = (category) => {
    setLoading(true);
    setProducts(
      $productos.filter((p) => {
        if (category === "") {
          return p;
        } else {
          return p.category.includes(category)
        }
      })
    );
    setValue(category);
    setLoading(false);
  };

  return (
    <>
      <section id="productos" className="section-two">
        <div className="section-filters">
          <h5>Filtros {value ? "/" + value : ""}</h5>
          <div className="cont-filters">
            <Button
              className="btn-ver-todos"
              size="small"
              onClick={() => {
                filterData("");
                setProducts(
                  $productos.filter((p) => {
                    return p;
                  })
                )
                setValue("");
              }}
              primary
            >
              Ver todos
            </Button>

            {window.innerWidth > 768 ? (
              <Menu
                className="menu-filters"
                size="small"
                pointing={window.innerWidth > 768 ? false : true}
                vertical={window.innerWidth > 768 ? true : false}
              >
                {categorias.map((item, k) => (
                  <Menu.Item disabled={
                    productsCategory.filter((p) => p.category.includes(item)).length === 0

                  } key={k} onClick={() => filterData(item)}>
                    <Label color={
                      productsCategory.filter((p) => p.category.includes(item)).length === 0 ? "yellow" : "green"
                    }>
                      {productsCategory.filter((p) => p.category.includes(item))
                        .length > 0
                        ? productsCategory.filter((p) =>
                            p.category.includes(item)
                          ).length
                        : 0}
                    </Label>
                    {item}
                  </Menu.Item>
                ))}
              </Menu>
            ) : (
              <Dropdown
                value={value}
                placeholder="Selecciona una categoria"
                fluid
                selection
                options={categorias.map((item) => ({
                  key: item,
                  text: item,
                  value: item,
                }))}
                onChange={(e, { value }) => filterData(value)}
              />
            )}
          </div>
        </div>
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

        <div className="menu-expandible">
          <div className="cont-title-menu-expandible">
            <h3 className="">Productos Seleccionados</h3>
            <p>Para comprar seleccione el boton de WhatssApp</p>
            <Button
              className="btn-close-menu-expandible"
              icon="close"
              size="mini"
              color="red"
              circular
              onClick={() => {
                document
                  .querySelector(".menu-expandible")
                  .classList.toggle("active");
              }}
            />
            <span className="span"></span>
          </div>
          {productsSelected.length === 0 ? (
            <div className="cont-empty">
              <h5>No hay productos seleccionados</h5>
            </div>
          ) : (
            <ul className="ul-products">
              {productsSelected.map((item, k) => (
                <>
                  <li className="li-product" key={k}>
                    <div className="cont-img">
                      <img className="img-selected" src={item.image} alt="" />
                    </div>
                    <div className="card-body-selected">
                      <h5 className="card-body-name">{item.name}</h5>
                      <Label as="a" color="teal" tag>
                        ${item.price}
                      </Label>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          )}

          <div className="cont-btn">
            <div className="tag-price">
              <Label size="large" as="a" color="blue" tag>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS",
                }).format(productsSelected.reduce((a, b) => a + b.price, 0))}
              </Label>
            </div>
            <div>
              <Button
                color="green"
                icon="whatsapp"
                label={
                  <Label color="blue" size="large">
                    Comprar
                  </Label>
                }
                onClick={() => {
                  sendWhatssap();
                }}
              ></Button>

              <Button
                color="red"
                icon="trash"
                label={
                  <Label color="blue" size="large">
                    Vaciar Carrito
                  </Label>
                }
                onClick={() => {
                  setProductsSelected([]);
                }}
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <Menu.Item
        onClick={() => {
          setStateCart(!stateCart);
          document.querySelector(".menu-expandible").classList.toggle("active");
        }}
        as="a"
        className="btn-cart"
      >
        <Button
          disabled={productsSelected.length === 0}
          icon={stateCart ? "close" : "shopping cart"}
          color={stateCart ? "red" : "orange"}
          circular
        />
        {productsSelected.length > 0 ? (
          <Label color="green" size="mini" floating>
            {productsSelected.length}
          </Label>
        ) : (
          ""
        )}
      </Menu.Item>

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Imagen Agrandada</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src={productImage.image} wrapped />
          <Modal.Description>
            <p>
              {productImage.description ? (
                productImage.description.map((d, i) => (
                  <div className="cont-description-modal-item" key={i}>
                    <span className="item-descrpition-span-modal" key={i}>
                      {d}
                    </span>
                  </div>
                ))
              ) : (
                <span>Sin descripcion</span>
              )}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="blue" onClick={() => setOpen(false)}>
            Ok
          </Button>
          <Button
            as="a"
            href={productImage.url}
            target="_blank"
            color="green"
            size="small"
            className="btn-link"
          >
            Comprar en Tienda Online
          </Button>
        </Modal.Actions>
      </Modal>
      <ToastContainer />
    </>
  );
}
