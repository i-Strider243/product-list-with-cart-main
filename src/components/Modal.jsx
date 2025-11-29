import Button from './Button'
import { useGlobalContext } from '../context';
import { useEffect, useRef } from 'react';

const Modal = () => {
  const {cart, total, isModalOpen, closeModal} = useGlobalContext();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isModalOpen) {
        dialogRef.current.showModal();
      }
    }
  })
  return (
    <dialog
      ref={dialogRef}
      className="flex flex-col gap-2 p-4 m-auto rounded-2xl w-sm backdrop:bg-(--Rose-900)/60"
    >
      <div className="w-8">
        <img src="/images/icon-order-confirmed.svg" alt="" />
      </div>
      <h3 className="text-(--Rose-900) text-2xl -mb-2.5 font-black">
        Order Confirmed
      </h3>
      <span className="text-(--Rose-500) text-xs">
        We hope you enjoy your food
      </span>
      <div className="bg-(--Rose-100) rounded-lg overflow-hidden px-6 py-2 my-2.5 overflow-y-scroll no-scrollbar max-h-100">
        {cart.map((item) => {
          const {
            id,
            name,
            image: { thumbnail },
            price,
            quantity,
            amount,
          } = item;

          return (
            <div
              className="flex justify-start items-center gap-4 text-xs py-3 border-b border-(--Rose-300) last:border-0"
              key={id}
            >
              <div className="w-12 aspect-square rounded-md overflow-hidden">
                <img src={thumbnail} alt="" />
              </div>
              <div className="space-y-1.5">
                <div className="font-semibold text-(--Rose-900)">{name}</div>
                <div className="space-x-4 text-xs text-(--Rose-400)">
                  <span className="text-(--Red) text-xs font-semibold">
                    {quantity}x
                  </span>
                  <span>@${price.toFixed(2)}</span>
                </div>
              </div>
              <span className="font-semibold ml-auto">
                ${amount.toFixed(2)}
              </span>
            </div>
          );
        })}
        <div className="flex justify-between items-center py-2.5 mt-1.5">
          <span className="text-xs text-(--Rose-500)">Order Total</span>
          <span className="text-black font-black text-xl">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
      <Button
        btnClass={"w-full"}
        text={"Start New Order"}
        onClick={closeModal}
      />
    </dialog>
  );
}

export default Modal
