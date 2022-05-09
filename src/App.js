import React, { useState } from "react";

import RatingCard from "./Components/RatingCard";
import ThankCard from "./Components/ThankCard";

import { AppCon } from "./Style";

function App() {
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [Rating, setRating] = useState(0);

  return (
    <AppCon>
      {IsSubmitted ? (
        <ThankCard rating={Rating} />
      ) : (
        <RatingCard setSubmit={setIsSubmitted} rating={Rating} setRating={setRating} />
      )}
    </AppCon>
  );
}

export default App;
