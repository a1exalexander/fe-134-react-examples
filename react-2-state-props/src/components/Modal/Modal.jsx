import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Modal.module.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ id, className, onClose, children, title, isOpen, buttons }) => {
  const [openState, setOpenState] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      timer.current = setTimeout(() => {
        setOpenState(false);
      }, 200);
    } else {
      setOpenState(true);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [isOpen]);

  if (!openState) {
    return null;
  }

  return createPortal(
    <div id={id} className={clsx("modal is-active", className)}>
      <div
        className={clsx("modal-background", {
          [styles.backdropEnter]: isOpen,
          [styles.backdropExit]: !isOpen,
        })}
      ></div>
      <div
        className={clsx("modal-card", {
          [styles.cardEnter]: isOpen,
          [styles.cardExit]: !isOpen,
        })}
      >
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            onClick={onClose}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <div className="buttons">
            {buttons}
          </div>
        </footer>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  buttons: PropTypes.node,
};
