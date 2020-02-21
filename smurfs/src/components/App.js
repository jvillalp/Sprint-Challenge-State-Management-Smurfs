import React, {useState, useEffect}  from "react";
import "./App.css";
//axios
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext';

//components
import Smurfs from '../components/Smurfs';
import SmurfForm from "./SmurfForm";

function App() {
  
const [smurfData, setSmurfData] = useState([]);
// const [smurfs, setSmurfs] = useState ([]);

const addSmurf = item =>{
  setSmurfData([...smurfData, item])
}

useEffect (() => {
  axios
      .get ('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfData(res.data)
        console.log('first response', res.data)
      })
      .catch( err => console.log('hey this is wrong', err));
}, []);


    return (
      <div className="App">
        <SmurfContext.Provider value ={{smurfData, addSmurf}}>
        <h1>SMURFS!</h1>
        <Smurfs />
        <SmurfForm/>
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
