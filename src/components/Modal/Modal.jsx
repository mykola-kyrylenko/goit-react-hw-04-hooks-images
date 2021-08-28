import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({imageURL, toggleModal}) => {
  useEffect(() => {
    document.addEventListener('keydown', this.closeModal);
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };
  
  const onBackDropClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onBackDropClick}>
      <div className={s.modal}>
        <img src={imageURL} alt="" />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
