import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'

export default function ModalComponent({
    open,
    setOpen,
    productImage
}) {
  return (
    <div>      <Modal
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
  </Modal></div>
  )
}
