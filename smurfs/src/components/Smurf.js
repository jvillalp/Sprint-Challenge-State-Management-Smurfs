import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div>
      <p>smurf</p>
      <h3>{props.smurf.name}</h3>
    </div>
  );
};
export default Smurf;
