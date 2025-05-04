import React from "react";
import { GetRandomContext } from "../src/App";

export default function Main() {
  const { getQuote, getsQuote, btnToggle } = React.useContext(GetRandomContext);

  return (
    <>
      <section className="main">
        <h2>Need some motivation? Click Below!</h2>
        <button className={`button theme`} onClick={getQuote}>
          Generate Quotes
        </button>
      </section>
      <article className="quote-section">
        {getsQuote.text && (
          <div className={`quote theme-${btnToggle}`}>
            <img
              className="quote-image"
              src={getsQuote.img.src}
              alt={getsQuote.img.alt}
            />
            <p>{getsQuote.text}</p>
            <h4>{getsQuote.author}</h4>
          </div>
        )}
      </article>
    </>
  );
}
