import { useEffect, useState } from "react";

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

  return <div>App</div>;
};
