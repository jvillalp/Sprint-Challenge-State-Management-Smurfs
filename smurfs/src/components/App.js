import React, {useState, useEffect}  from "react";
import "./App.css";
//axios
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext';

//components
import Smurfs from './Smurfs';
import SmurfForm from "./SmurfForm";



function App() {
  
const [smurfs, setSmurfs] = useState([]);
// const [smurfs, setSmurfs] = useState ([]);

const addSmurf = newSmurf =>{
  setSmurfs([...smurfs, newSmurf])
}

useEffect (() => {
  axios
      .get ('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
        console.log('first response', res.data)
      })
      .catch( err => console.log('hey this is wrong', err));
}, []);

  // useEffect(() => {
  //   axios
  //       .post('http://localhost:3333/smurfs', addSmurf)
  //       .then(res =>{
  //         console.log('can i post?', res);
  //         addSmurf(res.data)
  //       })
  //       .catch( err => console.log('hey this is a post error', err));
  //     })


    return (
      <div className="App">
        <SmurfContext.Provider value ={{addSmurf, smurfs}}>
        <h1>Welcome to the Smurf Village: </h1>
        <h2>Please add another: </h2>
        <Smurfs />
        <SmurfForm/>
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
