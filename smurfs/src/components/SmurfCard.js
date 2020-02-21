import React from "react";
import cuid from "cuid";

const SmurfCard = props => {
  console.log(props);
  return (
    <div key={cuid()}>
      <h3>Name: {props.smurf.name}</h3>
      <h4>Age: {props.smurf.age}</h4>
      <h5>Height:{props.smurf.height}</h5>
    </div>
  );
};
export default SmurfCard;
