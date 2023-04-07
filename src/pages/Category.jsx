import { Link, useParams } from "react-router-dom";
import CategoryCard from "../components/Card";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Search = () => {
  const { key } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipeByCategory();
    // eslint-disable-next-line
  }, [key]);

  const getRecipeByCategory = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY}&cuisine=${key}`
    );
    const data = await response.json();
    setRecipes(data.results);
    setLoading(false);
  };

  return (
    <motion.section
      className="my-8 relative"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-mono text-sm md:text-2xl font-bold dark:text-white">
          Search results for "{key}"
        </h1>
        <Link to={"/"}>
          <BiArrowBack className="w-5 md:w-8 h-5 md:h-8 text-black dark:text-white" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 xl:grid-cols-4">
        {loading && (
          <div className="flex item-center justify-center w-full absolute">
            <div className="lds-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {recipes.length > 0 &&
          !loading &&
          recipes.map((recipe) => (
            <CategoryCard recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </motion.section>
  );
};

export default Search;
