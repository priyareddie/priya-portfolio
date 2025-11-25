import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      className="theme-toggle"
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
    >
      {darkMode ? "☾" : "☀︎"}
    </button>
  );
};

export default ThemeToggle;
