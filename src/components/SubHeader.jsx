import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const SubHeader = () => {
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-2 md:space-x-3 mx-auto justify-between">
      <div className="flex items-center space-x-2 md:space-x-3">
        <NavLink
          to={"/category/italian"}
          className={({ isActive }) =>
            isActive ? "active-link-btn" : "normal-link-btn"
          }
        >
          <p>Italian</p>
        </NavLink>
        <NavLink
          to={"/category/thai"}
          className={({ isActive }) =>
            isActive ? "active-link-btn" : "normal-link-btn"
          }
        >
          <p>Thai</p>
        </NavLink>
        <NavLink
          to={"/category/japanese"}
          className={({ isActive }) =>
            isActive ? "active-link-btn" : "normal-link-btn"
          }
        >
          <p>Japanese</p>
        </NavLink>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <BiMoon className="text-white w-6 h-6" />
        ) : (
          <BiSun className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default SubHeader;
