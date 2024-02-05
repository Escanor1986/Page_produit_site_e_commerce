// lazy shall bu used when cart content has to load for the first time (for now it's empty)
import { useState, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';

const Modal = lazy(() => import('../components/Modal/Modal'));

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  // const wrapper = document.querySelector('.cart-nav-frame');

  return (
    <>
      <i
        onClick={() => setShowModal(true)}
        className="fa-solid fa-cart-shopping dark:text-white cart-nav text-2xl hover:scale-110 transition duration-300"
      ></i>
      {showModal && (
        <Suspense fallback={<i className="fa-regular fa-spinner fa-spin"></i>}>
          {createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}
