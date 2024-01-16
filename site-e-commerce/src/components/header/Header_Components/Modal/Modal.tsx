import PropTypes from 'prop-types';
import './Modal.css';
import { useRef, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // on vérifie si Modal existe et si le click n'est pas réalisé sur la Modal même
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Lors de la mise à jour du Cart, adapter le panier de dépendances

  return (
    <section
      className="modal z-10 static flex justify-end items-center"
      ref={modalRef}
    >
      <div className="modal-wrapper flex flex-col absolute bg-white top-44 right-80  m-0 border-transparent rounded-md shadow-2xl">
        <div className="pl-4 pt-4 pb-5 border-b-2 border-b-header-border-color font-semibold flex flex-row items-start">
          Cart
        </div>
        <div className="flex flex-grow justify-center items-center text-black/55 font-medium">
          Your cart is empty
        </div>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </section>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
