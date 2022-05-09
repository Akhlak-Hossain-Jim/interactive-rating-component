import React from "react";
import { ThankCardStyle } from "../Style";

export default function ThankCard({ rating }) {
  return (
    <ThankCardStyle>
      <img src="/illustration-thank-you.svg" alt="thanks illustration" />
      <div className="show">You selected {rating} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </ThankCardStyle>
  );
}
