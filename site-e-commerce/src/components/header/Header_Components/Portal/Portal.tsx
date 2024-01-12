import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import cart from '../../../../assets/cart.png';

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        className="cart-nav w-6 h-6 hover:scale-110 transition duration-300"
        src={cart}
        alt="cart"
      />
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
