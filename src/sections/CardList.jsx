import Card from '../components/Card';
import { useGlobalContext } from '../context';

const CardList = () => {
  const {desserts} = useGlobalContext();
  return (
    <div className='flex justify-center items-center'>
      <div className="flex sm:max-w-11/12 flex-wrap w-fit m-auto max-[639px]:justify-center justify-start gap-4 sm:gap-0 max-[400px]:p-4">
        {desserts.map((dessert) => {
          return <Card key={dessert.id} {...dessert} />;
        })}
      </div>
    </div>
  );
}

export default CardList
