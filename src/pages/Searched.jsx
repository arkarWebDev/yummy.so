import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import SearchCard from "../components/Card";
import { useEffect, useState } from "react";

const Searched = () => {
  const { searchKey } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipeByQuery();
    // eslint-disable-next-line
  }, [searchKey]);

  const getRecipeByQuery = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_MY_API_KEY}&query=${searchKey}`
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
        <h1 className="font-mono text-xl md:text-2xl font-bold dark:text-white">
          Search results for "{searchKey}"
        </h1>
        <Link to={"/"}>
          <BiArrowBack className="w-6 md:w-8 h-6 md:h-8 text-black dark:text-white" />
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
        {!loading &&
          recipes.length > 0 &&
          recipes.map((recipe) => (
            <SearchCard recipe={recipe} key={recipe.id} />
          ))}
      </div>
    </motion.section>
  );
};

export default Searched;
