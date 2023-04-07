import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import TrendingCard from "../components/Card";

const Trending = () => {
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
    <section className="my-10">
      <h1 className="font-mono text-xl md:text-2xl font-bold dark:text-white">
        Trending
      </h1>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            arrows: false,
            autoplay: true,
            interval: 4000,
            breakpoints: {
              640: {
                perPage: 2,
                gap: 10,
              },
              1000: {
                perPage: 4,
                gap: 20,
              },
            },
            gap: 30,
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
                <TrendingCard recipe={recipe} long={true} />
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </section>
  );
};

export default Trending;
