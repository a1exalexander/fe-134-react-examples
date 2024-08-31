import { useState } from "react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";

export const Pictures = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <p>Pictures</p>
      <Button onClick={openModal}>Open modal</Button>
      <Modal
        id="pictures-modal"
        isOpen={isModalOpen}
        title="Pictures modal"
        onClose={closeModal}
        buttons={
          <>
            <button className="button is-danger">Save changes</button>
            <button className="button">Cancel</button>
          </>
        }
      >
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          ipsa?
        </p>
      </Modal>
    </div>
  );
};
