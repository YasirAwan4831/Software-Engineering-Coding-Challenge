import React, { useState } from "react";

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const restart = () => setCurrentIndex(0);
  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, slides.length - 1));

  const { title, text } = slides[currentIndex];

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={prev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={next}
          disabled={currentIndex === slides.length - 1}
        >
          Next
        </button>
      </div>

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </div>
  );
}

export default Slides;