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
            <Button>Save changes</Button>
            <Button theme="empty" onClick={closeModal}>Cancel</Button>
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
