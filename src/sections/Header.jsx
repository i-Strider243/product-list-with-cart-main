import { useRef } from 'react';
import Button from '../components/Button';
import { useGlobalContext } from '../context';
import data from '../../data.json'

const Header = () => {
  const { filterCart} = useGlobalContext();
  const btnContainer = useRef(null);

  // Scroll funcrions for filter btns
  const scrollLeft = () => {
    btnContainer.current.scrollBy({
      left: -200,
      behavior: "smooth"
    })
  }

  const scrollRight = () => {
    btnContainer.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };
  
  return (
    <header className="p-4 flex flex-col justify-center text-center gap-3 w-full relative">
      <h1 className="bg-amber-600 text-5xl font-black">Desserts</h1>
      <div
        ref={btnContainer}
        className="flex gap-2 sm:mx-4 sm:rounded-[100px] justify-center-safe overflow-x-auto no-scrollbar"
      >
        <Button text={"All"} onClick={() => filterCart("all")} />
        {data.map((item) => {
          const { id, category } = item;
          return (
            <Button
              key={id}
              text={category}
              onClick={() => filterCart(category)}
            />
          );
        })}
      </div>
      <Button
        text={"◀"}
        btnClass="!px-1 absolute left-0 bottom-4 max-[639px]:hidden"
        onClick={scrollLeft}
      />
      <Button
        text={"▶"}
        btnClass="!px-1 absolute right-0 bottom-4 max-[639px]:hidden"
        onClick={scrollRight}
      />
    </header>
  );
}

export default Header
