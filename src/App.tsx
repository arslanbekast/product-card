import './App.css'
import {ProductCard} from "./ProductCard.tsx";

function App() {

  return (
      <ProductCard
          title="Наушники Sony"
          origin="Япония"
          price={629900}
          currency="RUB"
          imageUrl="https://login.kg/image/cache/catalog/new/Aksessuary/Naushniki/Sony/WH-CH520/1-500x400.jpg"
      />
  )
}

export default App
