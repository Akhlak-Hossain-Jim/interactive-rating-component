import React from "react";
import { RatingCardStyle } from "../Style";

export default function RatingCard({ setSubmit, rating, setRating }) {
  const Rates = [1, 2, 3, 4, 5];
  return (
    <RatingCardStyle>
      <div className="top_star">
        <img src="/icon-star.svg" alt="star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating_container">
        {React.Children.toArray(
          Rates.map((data) => (
            <div
              className={`rating_container__element ${
                rating === data ? "active" : ""
              }`}
              onClick={() => setRating(Number(data))}
            >
              {data}
            </div>
          ))
        )}
      </div>
      <button onClick={() => setSubmit(true)}>SUBMIT</button>
    </RatingCardStyle>
  );
}
