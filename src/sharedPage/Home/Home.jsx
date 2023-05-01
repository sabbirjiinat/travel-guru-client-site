import React, { useEffect, useState } from "react";
import CategoryTravel from "../../components/CategoryTravel/CategoryTravel";

const Home = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch(
      "https://travel-guru-practice-server-site-sabbirjiinat.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  //   console.log(categories);
  return (
    <div className="flex gap-3 justify-end mt-5 pe-3">
      {categories?.map((category) => (
        <CategoryTravel key={category.id} category={category}></CategoryTravel>
      ))}
    </div>
  );
};

export default Home;
