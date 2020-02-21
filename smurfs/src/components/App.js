import React  from "react";
import "./App.css";
//axios
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext';

//components
import Smurf from '../components/Smurf';

function App() {
  
const [smurfData, setSmurfData] = useState([]);
const [smurfs, setSmurfs] = useState ([]);

useEffect (() => )


    return (
      <div className="App">
        <SmurfContext.Provider>
        <h1>SMURFS!</h1>
        <Smurf/>
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
