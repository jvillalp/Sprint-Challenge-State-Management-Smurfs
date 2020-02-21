export const initialState = [
  {
    item: "Bob",
    id: Date.now()
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_SMURF":
      const addSmurf = {
        item: action.payload,
        id: Date.now()
      };
      return [...state, addSmurf];
      default:
            return state;
  }

};
