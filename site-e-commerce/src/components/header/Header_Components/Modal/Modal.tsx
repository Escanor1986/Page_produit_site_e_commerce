import PropTypes from 'prop-types';
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
  }, [onClose]);

  return (
    <div className="modal">
      <div ref={modalRef}>I am a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
