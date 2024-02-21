// ImageModal.tsx
import React from 'react';

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt="Enlarged view" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageModal;
