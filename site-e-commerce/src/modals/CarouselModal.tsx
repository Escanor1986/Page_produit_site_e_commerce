import React, { useState } from 'react';

interface ImageModalProps {
  images: string[]; // Tableau des URLs des images
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="absolute bg-black bg-opacity-80 flex items-center justify-center w-full h-full top-0 left-0 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal-content flex flex-col w-3/5 h-3/5"
        onClick={e => e.stopPropagation()}
      >
        <button className="flex justify-end" onClick={onClose}>
          <i className="fa-solid fa-xmark text-gray-200 text-2xl hover:text-red-600 p-2"></i>
        </button>
        <div className="flex justify-evenly align-middle">
          <button className="left-button" onClick={handlePrevious}>
            <i className="fa-solid fa-chevron-left text-5xl rounded-xl text-slate-400"></i>
          </button>
          <img src={images[currentImageIndex]} alt="Enlarged view" />
          <button className="right-button" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right text-5xl rounded-xl text-slate-400"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
