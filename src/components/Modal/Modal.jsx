
import React from 'react';

const Modal = ({ onClose, imageUrl }) => {
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={imageUrl} alt="Large" />
      </div>
    </div>
  );
};

export default Modal;
