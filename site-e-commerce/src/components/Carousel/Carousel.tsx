import image1 from '../../assets/sneakers_1.webp';
import image2 from '../../assets/sneakers_2.webp';
import image3 from '../../assets/sneakers_3.webp';
import image4 from '../../assets/sneakers_4.webp';

const Carousel = () => {
  const images = [image1, image2, image3, image4];

  const navImages = images.map((item, index) => (
    <img
      src={item}
      key={index}
      alt="Petite Image"
      className="rounded-xl w-full"
    />
  ));

  return (
    <>
      <div className="grid gap-4">
        <div className="row-span-1">
          <img
            src={images[0]}
            alt="Grande Image"
            className="rounded-xl w-full"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">{navImages}</div>
      </div>
    </>
  );
};

export default Carousel;
