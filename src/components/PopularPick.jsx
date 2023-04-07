import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SeacrhCard from "../components/Card";
import { useEffect, useState } from "react";

const PopularPick = () => {
  const [recipes, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_MY_API_KEY}&number=9`
    );
    const data = await response.json();
    setRecipe(data.recipes);
    setLoading(false);
  };

  return (
    <section>
      <h1 className="font-mono text-xl md:text-2xl font-bold dark:text-white">
        PopularPick
      </h1>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            arrows: false,
            autoplay: true,
            interval: 2000,
            breakpoints: {
              640: {
                perPage: 2,
                gap: 7,
              },
              1000: {
                perPage: 3,
                gap: 14,
              },
            },
            gap: 21,
          }}
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
          {recipes.length > 0 &&
            !loading &&
            recipes.map((recipe) => (
              <SplideSlide key={recipe.id}>
                <SeacrhCard recipe={recipe} long={false} />
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </section>
  );
};

export default PopularPick;
