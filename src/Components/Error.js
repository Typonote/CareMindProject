import React from "react";
import "Components/scss/Error.scss";
const Error = (props) => {
  return (
    <div className="Error__Container">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Error;
