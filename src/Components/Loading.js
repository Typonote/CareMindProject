import React from "react";
import "Components/scss/Loading.scss";
import { SwapSpinner } from "react-spinners-kit";

const Loading = () => {
  return (
    <div className="Loading__Container">
      <SwapSpinner size={80} color="rgb(255, 80, 116)" />
    </div>
  );
};

export default Loading;
