import React from "react";
import { SiAccuweather } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { GetRandomContext } from "../src/App";
export default function Header() {
  const { toggleBtn, btnToggle } = React.useContext(GetRandomContext);

  return (
    <>
      <header className="header-section">
        <h1>Quotes</h1>
        <div className="btn-section">
          {btnToggle === "light" ? (
            <SiAccuweather className="theme-day" />
          ) : (
            <FaMoon className="theme-night" />
          )}

          <button onClick={toggleBtn} className={`btn theme-${btnToggle}`}>
            <div className={`thumb thumb-${btnToggle}`}></div>
          </button>
        </div>
      </header>
    </>
  );
}
