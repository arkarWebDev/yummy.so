import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Details = () => {
  const [isInstruction, setIsInstruction] = useState(true);
  const [recipe, setRecipe] = useState({});
  const { key } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipeDetails();
    // eslint-disable-next-line
  }, [key]);

  const getRecipeDetails = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${key}/information?apiKey=${process.env.REACT_APP_MY_API_KEY}`
    );
    const data = await response.json();
    setRecipe(data);
    setLoading(false);
  };

  const changePage = () => {
    setIsInstruction(!isInstruction);
  };

  const { image, title, summary, instructions, extendedIngredients } = recipe;

  return (
    <motion.section
      className="my-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading && (
        <div className="flex item-center justify-center w-full">
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
      {!loading && recipe && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-mono text-xl md:text-2xl font-bold dark:text-white">
              {title}
            </h1>
            <Link to={"/"}>
              <BiArrowBack className="w-6 md:w-8 h-6 md:h-8 text-black dark:text-white" />
            </Link>
          </div>
          <div className="flex justify-between gap-4 flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 h-fit">
              <img src={image} alt="sudney burger" className="object-cover" />
              <div className="gradient-dark dark:gradient-glow z-40"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-2 cursor-pointer mb-2">
                <p
                  className={isInstruction ? "active-btn" : "normal-btn"}
                  onClick={changePage}
                >
                  Instructions
                </p>
                <p
                  className={isInstruction ? "normal-btn" : "active-btn"}
                  onClick={changePage}
                >
                  Ingredients
                </p>
              </div>
              {isInstruction ? (
                <div>
                  <p
                    className="text-sm font-normal xl:text-base dark:text-white leading-tight mb-3"
                    dangerouslySetInnerHTML={{ __html: summary }}
                  ></p>
                  <div
                    className="space-y-1 text-sm font-light xl:text-base dark:text-white"
                    dangerouslySetInnerHTML={{ __html: instructions }}
                  ></div>
                </div>
              ) : (
                <div>
                  <ol className="space-y-1 text-sm xl:text-base dark:text-white list-decimal ms-6">
                    {extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}>{ingredient.aisle}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Details;
