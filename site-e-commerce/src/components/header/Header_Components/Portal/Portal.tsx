// lazy shall bu used when cart content has to load for the first time (for now it's empty)
import { useState, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import cart from '../../../../assets/cart.png';

const Modal = lazy(() => import('../Modal/Modal'));

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  const wrapper: HTMLElement | null = document.querySelector('.cart-nav-frame');

  return (
    <>
      <img
        onClick={() => setShowModal(true)}
        className="cart-nav w-6 h-6 hover:scale-110 transition duration-300"
        src={cart}
        alt="cart"
      />
      {showModal && wrapper && (
        <Suspense fallback={<i className="fa-regular fa-spinner fa-spin"></i>}>
          {createPortal(<Modal onClose={() => setShowModal(false)} />, wrapper)}
        </Suspense>
      )}
    </>
  );
}
