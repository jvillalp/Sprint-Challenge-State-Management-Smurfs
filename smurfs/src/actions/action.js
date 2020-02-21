export const ADD_SMURF = 'ADD_SMURF';

export const addmember = newMemberName => {
    return {
      type: ADD_SMURF,
      payload: { name: newMemberName,}
    };
  };