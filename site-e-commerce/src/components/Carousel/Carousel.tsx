import { useState, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';

const ImageModal = lazy(() => import('../../modals/CarouselModal'));

import image1 from '../../assets/sneakers_1.webp';
import image2 from '../../assets/sneakers_2.webp';
import image3 from '../../assets/sneakers_3.webp';
import image4 from '../../assets/sneakers_4.webp';

const Carousel = () => {
  const images = [image1, image2, image3, image4];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const navImages = images.map((item, index) => (
    <img
      src={item}
      key={index}
      alt={`Petite Image ${index + 1}`}
      className="rounded-xl w-full cursor-pointer"
      onClick={() => handleImageClick(item)}
    />
  ));

  return (
    <>
      <div className="grid gap-4">
        <div className="row-span-1">
          <img
            src={currentImage}
            alt="Grande Image"
            className="rounded-xl w-full"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">{navImages}</div>
      </div>
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          {createPortal(
            <ImageModal
              image={currentImage}
              onClose={() => setShowModal(false)}
            />,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
};

export default Carousel;
