import { useEffect, useState } from "react";
import { getCategories } from "../api";
import { capFirstLetter } from "../utils";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(({ data }) => setCategories(data.categories));
  }, []);

  return (
    <div className="Categories">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <h3>{capFirstLetter(category.slug)}</h3>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
