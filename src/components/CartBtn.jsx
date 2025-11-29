import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context';

const CartBtn = ({parentId}) => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const { cart, addToCart, increase, decrease } = useGlobalContext();
  const cartBtn = useRef(null);
  const counterRef = useRef(null);
  const cartBtnClass =
    "bg-white px-4.5 hover:text-(--Red) w-full h-full text-xs flex justify-center items-center gap-1.5 font-semibold transition-transform duration-500 ease-in-out bg-white rounded-[100px] absolute";

    // Close the button when user clicks outside of it
  useEffect(() => {
    const close = (e) => {
      if (cartBtn.current && !cartBtn.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("click", close);
    };
  });

  // Make the second set of buttons invisible when not shown
  useEffect(() => {
    if (counterRef.current) {
      if (active) {
        counterRef.current.removeAttribute("inert");
      } else {
        counterRef.current.setAttribute("inert", "");
      }
    }
  })

  // Sync local count with cart item's quantity
  useEffect(() => {
    const cartItem = cart.find((item) => item.id === parentId);
    setCount(cartItem ? cartItem.quantity : 0);
  }, [cart, parentId]);

  return (
    <div
      className="color-current max-[639px]:w-1/2 max-[639px]:h-9 h-6.5 flex justify-center items-center bg-(--Red) whitespace-nowrap border-2 border-(--Rose-100) hover:border-(--Red) rounded-[100px] transition-[border-color] duration-250 overflow-hidden max-[639px]:p-4 relative -translate-y-1/2"
      ref={cartBtn}
    >
      <button
        className={
          active === false ? cartBtnClass : `${cartBtnClass} -translate-y-2/1`
        }
        type="button"
        onClick={() => {
          addToCart(parentId);
          setActive(true);
        }}
      >
        <div className="w-3.5 max-[639px]:w-4.5">
          <img
            src="/images/icon-add-to-cart.svg"
            className="w-full aspect-square"
            alt=""
          />
        </div>
        <p className="text-[8px] max-[639px]:text-sm text-xl h-fit">
          Add to Cart
        </p>
      </button>

      {/* Second set of Counter buttons */}
      <div
        ref={counterRef}
        inert
        className="flex justify-between items-center gap-2 w-full h-full bg-(--Red) px-2 py-1.4"
      >
        <button
          type="button"
          className="counter-btn rounded-full p-1 flex justify-center items-center border border-white text-white hover:text-(--Red) w-4 hover:bg-white group"
          onClick={() => decrease(parentId)}
        >
          <span className="sr-only">Decrease Button</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
        <span
          type="number"
          name="quantity"
          id="quantity"
          className="w-8 block text-center text-white bg-transparent"
        >
          {count}
        </span>
        <button
          type="button"
          className="counter-btn rounded-full p-1 flex border border-white text-white hover:text-(--Red) w-4 aspect-square hover:bg-white group"
          onClick={() => increase(parentId)}
        >
          <span className="sr-only">Increase Button</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="currentColor"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartBtn
