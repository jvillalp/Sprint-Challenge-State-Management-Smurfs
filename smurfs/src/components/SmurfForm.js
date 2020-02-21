import React, {useContext, useReducer, useState, useEffect} from "react";
import {SmurfContext} from '../contexts/SmurfContext';

import axios from 'axios';
import cuid from 'cuid';
import {reducer, initialState} from '../reducers/reducer';
//actions
// import {addMember} from '../actions/action';

const SmurfForm = () => {

    const { addSmurf} = useContext(SmurfContext);

    // const[state, dispatch] = useReducer(reducer, initialState)

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: cuid()
    })
    const handleChanges = e => {
        // const smurf = e.target.name 
        setNewSmurf({
            ...newSmurf,
             [e.target.name] :[e.target.value],
        }) 
    };
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('hello', addSmurf)
        addSmurf(newSmurf)

        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        // .then(res =>{
        //   console.log('can i post?', res);
        //   addSmurf(res.data)
        // })
        // .catch( err => console.log('hey this is a post error', err));
    };

    

          
  return (
    <div>
        <form>
      <input
      id="name"
      type='text'
      name='name'
      placeholder="Name"
      onChange = {handleChanges}
      />
      <input
       id="age"
       type='text'
       name='age'
       placeholder='age'
       onChange = {handleChanges}
      />
      <input
       id="height"
       type='text'
       name='height'
       placeholder='Height'
       onChange = {handleChanges}
      />
      <button onClick={handleSubmit}> Add Smurf to Village</button>
      </form>

    </div>
  );
};
export default SmurfForm;
