import { fn } from "@storybook/test";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { useEffect, useState } from "react";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isOpen: false,
    title: "My modal",
    onClose: fn(),
    children: "some content...",
    buttons: (
      <>
        <Button>Submit</Button>
        <Button theme="empty">Cancel</Button>
      </>
    ),
  },
};

const ControlTemplate = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const onClose = () => {
    args.onClose();
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        buttons={
          <>
            <Button>Submit</Button>
            <Button onClick={onClose} theme="empty">
              Cancel
            </Button>
          </>
        }
      />
    </div>
  );
};

export const Control = ControlTemplate.bind({});

Control.args = {
  isOpen: true,
  title: "My modal",
  onClose: fn(),
  children: "some content...",
};
