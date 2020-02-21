import React from 'react';
import {useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext';

import SmurfsCard from './SmurfCard';

const Smurfs = () => {
    const {smurfs, addSmurf} = useContext(SmurfContext);
    
    return (
        <div>
            {console.log(smurfs)}
            {smurfs.map(smurf => 
                <SmurfsCard
                smurf={smurf}
                addSmurf ={addSmurf}
                />
            )}
        </div>
    )
}

export default Smurfs;