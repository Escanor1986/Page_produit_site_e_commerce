// lazy shall bu used when cart content has to load for the first time (for now it's empty)
import { useState, Suspense, lazy, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = lazy(() => import('../modals/HeaderModal'));

export default function Portal() {
  const [showModal, setShowModal] = useState(false);
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Maj du wrapper une fois que le composant est monté
    const currentWrapper = document.querySelector(
      '.opened-modal-wrapper'
    ) as HTMLElement | null;
    setWrapper(currentWrapper);
  }, []); // Le tableau vide garantit que l'effet ne s'exécute qu'une fois

  return (
    <>
      <i
        onClick={() => setShowModal(true)}
        className="fa-solid fa-cart-shopping dark:text-white cart-nav text-2xl hover:scale-110 transition duration-300"
      ></i>
      {showModal && wrapper && (
        <Suspense fallback={<i className="fa-regular fa-spinner fa-spin"></i>}>
          {createPortal(<Modal onClose={() => setShowModal(false)} />, wrapper)}
        </Suspense>
      )}
    </>
  );
}
