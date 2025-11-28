import CardList from './CardList';
import Cart from './Cart';

const Main = () => {
  return (
    <main className='mb-4 flex justify-center flex-col flex-wrap items-center content-center gap-4 md:flex-nowrap px-8 sm:flex-row sm:items-start max-w-7xl'>
      <CardList />
      <Cart />
    </main>
  )
}

export default Main
