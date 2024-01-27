import PropTypes from 'prop-types';
import './Modal.css';
import articlePicture from '../../../../assets/sneakers_1.webp';
import { useRef, useEffect } from 'react';
import { useArticleContext } from '../../../../contexts/useArticleContext';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const { articles, setNumber } = useArticleContext();
  const firstArticle = articles[0];
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickTrashBin = () => {
    if (firstArticle.numberOfArticle > 0) {
      setNumber(firstArticle.id, 0);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
    <section
      className="modal absolute top-36 right-2 z-10 flex justify-end items-center"
      ref={modalRef}
    >
      <div className="modal-wrapper flex flex-col bg-white m-0 border-transparent rounded-md shadow-2xl">
        <div className="pl-4 pt-4 pb-5 border-b-2 border-b-header-border-color font-semibold flex flex-row items-start">
          Cart
        </div>
        {!firstArticle || firstArticle.numberOfArticle <= 0 ? (
          <div className="flex flex-grow justify-center items-center text-black/55 font-medium">
            Your cart is empty
          </div>
        ) : (
          <section className="py-6 px-4 flex flex-col flex-grow justify-between align-middle">
            <div className="pb-6 flex flex-grow justify-evenly items-center text-black/45 font-medium">
              <img
                alt="article"
                src={articlePicture}
                className="w-14 h-14 cursor-pointer hover:scale-150 transition duration-300 rounded-md"
              />
              <div className="article-title-and-price flex flex-col justify-between">
                <p>{firstArticle.name}</p>
                <div className="flex space-x-2">
                  <span>
                    ${firstArticle.price.toFixed(2)} x{' '}
                    {firstArticle.numberOfArticle}
                  </span>
                  <span className="font-bold text-black">
                    $
                    {(
                      firstArticle.price * firstArticle.numberOfArticle
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
              <i className="fa-solid fa-trash w-5 h-5 text-black/45 hover:scale-110 hover:text-black/60 transition duration-300"></i>
            </div>
            <button
              onClick={handleClickTrashBin}
              className="min-h-14 cursor-pointer rounded-lg text-white text-lg bg-orange-500 text-center"
            >
              Checkout
            </button>
          </section>
        )}
      </div>
    </section>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
