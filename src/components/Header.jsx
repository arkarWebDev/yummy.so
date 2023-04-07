import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const { searchKey } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${key}`);
  };

  return (
    <nav className="flex items-center justify-between flex-col space-x-4 md:flex-row md:space-x-0 mb-10">
      <Link className="text-4xl font-bold dark:text-white" to={"/"}>
        YUMMY<span className="text-2xl">.so</span>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-b-gray-500 dark:border-b-white flex items-center justify-between ">
          <input
            type="text"
            className=" focus:outline-none text-lg bg-transparent dark:text-white"
            value={searchKey}
            onChange={(e) => setKey(e.target.value)}
          />
          <button type="submit" className="inline-block">
            <BiSearch className="text-black w-6 h-6 dark:text-white" />
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Header;
