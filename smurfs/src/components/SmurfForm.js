import React, {useContext, useReducer} from "react";
import {SmurfContext} from '../contexts/SmurfContext';

import {reducer, initialState} from '../reducers/reducer';

const SmurfForm = props => {
    const newSmurf = {
        name: ""
    }
    const {smurfData, addSmurf} = useContext(SmurfContext);
    const[state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('hello', addSmurf)
        addSmurf([...smurfData,newSmurf]);
        console.log("smurfdata = " + smurfData);
        console.log("payload is:" + JSON.stringify(smurfData));
        dispatch({ type: 'ADD_SMURF', payload: smurfData})
    };
  return (
    <div>
        <form>
      <input
      id="smurfName"
      type='text'
      name='smurfName'
      value={newSmurf.name}
      />
      <button onClick={handleSubmit}> Add Smurf to Village</button>
      </form>

    </div>
  );
};
export default SmurfForm;
