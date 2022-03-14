import { useEffect, useState } from "react";
import Header from "./components/header";
import ItemAmount from "./components/itemAmount";
import ItemView from "./components/itemView";
import api from "./services/api";

import "./styles/global.css";

function App() {
  const [food, setFood] = useState([]);
  
  const loadFood = async () => {
    const response = await api.get("products");
    setFood(response.data);
    console.log(response)
  };

  useEffect(() => {
    loadFood();
  }, []);
  
  return (
    <>
      <Header />
     {food.map(f => (
      <main key={f.id}>
        <ItemView  productName={f.nm_product} productDescription={f.description} price={f.vl_price} discount={f.vl_discount}/>

        <ItemAmount ingredients={f.ingredients}/>

      </main>
     ))}
    </>
  );
}

export default App;
