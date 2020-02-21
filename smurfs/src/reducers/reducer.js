import {ADD_SMURF} from '../actions/action';

export const initialState = {
    members: []
    
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:{
        return{
            ...state,
            members: [...state.members, action.payload]
        };
    }
      
      default:
            return state;
  }

};
