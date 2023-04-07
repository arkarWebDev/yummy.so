import { Link } from "react-router-dom";

const Search = ({ recipe: { image, title, id }, long = false }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={image}
          alt="pupular pick"
          className={
            long
              ? "w-full h-48 md:h-64 object-cover"
              : "w-full h-32 md:h-52 object-cover"
          }
        />
        <div className=" gradient-dark dark:gradient-glow z-40"></div>
        <p className="absolute text-white font-mono font-bold text-sm md:text-lg z-50 popular-text bottom-5 md:bottom-6">
          {long ? title.substr(0, 10) : title.substr(0, 16)}
        </p>
      </div>
    </Link>
  );
};

export default Search;
