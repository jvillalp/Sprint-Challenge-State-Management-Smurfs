import React from "react";

const SmurfCard = props => {
  console.log(props);
  return (
    <div>
      <h3>Name: {props.smurf.name}</h3>
      <h4>Age: {props.smurf.age}</h4>
      <h5>Height:{props.smurf.height}</h5>
    </div>
  );
};
export default SmurfCard;
