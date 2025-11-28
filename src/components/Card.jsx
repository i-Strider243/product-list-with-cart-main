import { useEffect, useRef, useState } from 'react'
import CartBtn from './CartBtn'
import { useGlobalContext } from '../context';

const Card = ({id,image: {mobile,tablet,desktop},name,category,price}) => {
  const [imageSrc, setImageSrc] = useState(desktop);
  const cardImgContainer = useRef(null);
  const cardImgRef = useRef(null);
  const {cart} = useGlobalContext();

  // Border on card items that are inside the cart
  useEffect(() =>{
    const cardElement = cardImgContainer.current;
    if (cart.find(item => item.id === id)) {
      cardElement.classList.add('border-2','border-(--Red)');
    } else {
      cardElement.classList.remove('border-2','border-(--Red)');
    }
  })

  // Swap images based on device
  useEffect(() => {
    const prefersMobile = window.matchMedia("(max-width: 375px)");
    const prefersTablet = window.matchMedia("(min-width: 376px) and (max-width: 768px)");
    const prefersDesktop = window.matchMedia("(min-width: 769px)");

    const updateImage = () => {
      if (prefersDesktop.matches) setImageSrc(desktop);
      else if (prefersTablet.matches) setImageSrc(tablet);
      else setImageSrc(mobile);
    };

    updateImage()

    prefersMobile.addEventListener("change", updateImage);
    prefersTablet.addEventListener("change", updateImage);
    prefersDesktop.addEventListener("change", updateImage);

    // Remove event listeners on unmount
    return () => {
      prefersMobile.removeEventListener("change", updateImage);
      prefersTablet.removeEventListener("change", updateImage);
      prefersDesktop.removeEventListener("change", updateImage);
    };
  })

  return (
    <div className="flex flex-col justify-start items-center sm:w-42 p-2 bg-white sm:bg-transparent sm:hover:bg-white/50 rounded-2xl relative">
      <div ref={cardImgContainer} className="rounded-lg overflow-hidden">
        <img
          ref={cardImgRef}
          className="w-full aspect-5/3 object-cover sm:aspect-square"
          src={imageSrc}
          alt=""
        />
      </div>
      <CartBtn parentId={id} />
      <div className="flex flex-col self-start gap-0.5">
        <span className="text-(--Rose-400) text-sm font-normal">
          {category}
        </span>
        <span className="text-(--Rose-900) text-sm font-semibold">{name}</span>
        <span className="text-(--Red) text-sm font-semibold">{price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Card
