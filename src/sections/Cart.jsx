import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal';
import { useGlobalContext } from '../context';

const Cart = () => {
  const [numberOfItems,setNumberOfItems] = useState(0);
  const notifier = useRef(null);
  const [count, setCount] = useState(0);
  const {cart, total, removeItem, clearCart, isModalOpen, order} = useGlobalContext();

  //  Get the total number of items
  useEffect(() => {
    if (cart.length > 0) {
      const numberOf = cart.reduce((acc, curr) => {
        return Number(acc += curr.quantity)
      },[]);
      setNumberOfItems(numberOf)
    }
    setCount(cart.length)
  },[cart])

  // animate-ping for cart alert notifier when an item is added
  useEffect(() => {
    if (cart.length > 0 && cart.length > count) {
      if (notifier.current) {
        notifier.current.classList.add("animate-ping");
      }
      
      const timer = setTimeout(() => {
        if (notifier.current) {
          notifier.current.classList.remove("animate-ping");
        }
      },2000);
      return () => clearTimeout(timer)
    }
  },[cart.length])

  // Show empty cart message if no items in cart
  if (cart.length === 0) {
    return (
      <aside className="bg-white p-4 space-y-4 min-w-[320px] max-w-[385px] h-fit rounded-2xl sm:sticky sm:top-6">
        <h2 className="text-(--Red) text-2xl font-bold">
          Your Cart ({cart.length})
        </h2>
        <div className="w-full">
          <img
            className="w-1/1 aspect-video"
            src="/images/illustration-empty-cart.svg"
            alt="Empty cart image"
          />
        </div>
        <span className="font-semibold text-sm block text-center text-(--Rose-400) mb-4">
          Your added items will appear here
        </span>
      </aside>
    );
  }

  return (
    <>
      {isModalOpen && <Modal />}
      <aside className="bg-white p-6 space-y-8 text-xs min-w-[350px] max-w-[400px] h-fit rounded-2xl">
        <div className="flex justify-between gap-1 items-center">
          <h2 className="text-(--Red) text-2xl font-bold text-nowrap relative">
            Your Cart ({numberOfItems}){/* Notifier for new cart items added */}
            <span className="absolute top-0 right-0 flex size-3">
              <span
                ref={notifier}
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
              ></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
          </h2>
          <Button text={"Clear Cart"} bt onClick={clearCart} />
        </div>
        <div>
          {cart.map((item) => {
            const { id, name, price, quantity, amount } = item;

            return (
              <div
                className="text-xs flex justify-between items-center border-b py-4 border-b-(--Rose-100)"
                key={id}
              >
                <div>
                  <span className="font-semibold text-(--Rose-900)">
                    {name}
                  </span>
                  <div className="space-x-4 text-(--Rose-400)">
                    <span className="text-(--Red) font-semibold">
                      {quantity}x
                    </span>
                    <span>@${price.toFixed(2)}</span>
                    <span className="font-semibold">${amount.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  className="border w-fit aspect-square p-2 border-(--Rose-300) rounded-full hover:border-(--Rose-900) group"
                  onClick={() => removeItem(item.id)}
                >
                  <img
                    src="/images/icon-remove-item.svg"
                    alt=""
                    className="group-hover:invert"
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-(--Rose-500) font-semibold">Order Total</span>
          <span className="text-2xl text-(--Rose-900) font-black">
            ${total.toFixed(2)}
          </span>
        </div>
        <div className="px-10 py-4 rounded-lg bg-(--Rose-100) flex gap-2 justify-center items-center">
          <img src="/images/icon-carbon-neutral.svg" alt="" />
          <p>
            This is a <span className="font-bold">carbon-neutral</span> delivery
          </p>
        </div>
        <Button
          text={"Confirm Order"}
          btnClass={"w-full"}
          onClick={order}
        />
      </aside>
    </>
  );  
}

export default Cart
