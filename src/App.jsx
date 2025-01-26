import { useEffect, useState } from "react";
import { Texto } from "./components/Texto";
import { Portada } from "./components/Portada";
import { Card } from "./components/Card";
export const App = () => {
  const [products, setProducts] = useState([]);

  const datos = async () => {
    const url =
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";
    const datos = await fetch(url);
    const data = await datos.json();
    setProducts(data);
  };

  useEffect(() => {
    datos();
  }, []);
  console.log(products);
  return (
    <div className="bg-black">
          <Texto />
          <div className="mt-4">
            <Card products={products} />
          </div>
        </div>
  );
};
