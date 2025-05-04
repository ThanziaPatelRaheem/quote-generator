import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import "./index.css";
import quoteData from "../../quoteData.js";

const GetRandomContext = React.createContext();

function App() {
  const [getsQuote, setGetQuote] = React.useState("");
  const [btnToggle, setBtnToggle] = React.useState("light");

  function getQuote() {
    console.log("clicked");
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    const randomQuote = quoteData[randomIndex];

    setGetQuote(randomQuote);
    console.log(randomQuote);
  }

  function toggleBtn() {
    console.log("clicked");
    setBtnToggle((prevToggle) => (prevToggle === "light" ? "dark" : "light"));
  }

  React.useEffect(() => {
    document.body.className = `theme-${btnToggle}`;
  });

  return (
    <>
      <GetRandomContext.Provider
        value={{ getQuote, getsQuote, toggleBtn, btnToggle }}
      >
        <main className={`theme-${btnToggle}`}>
          <Header />
          <Main />
        </main>
      </GetRandomContext.Provider>
    </>
  );
}

export default App;
export { GetRandomContext };
