import React from 'react';
import {useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext';

import Smurf from './Smurf';

const Smurfs = () => {
    const {smurfData, addSmurf} = useContext(SmurfContext);
    
    return (
        <div>
            {smurfData.map(smurf => (
                <Smurf
                smurf={smurf}
                addSmurf ={addSmurf}
                />
            ))}
        </div>
    )
}

export default Smurfs