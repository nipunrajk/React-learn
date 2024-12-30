const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "IncrementByAmount":
      return { count: state.count + action.payload };
    case "DecrementByAmount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export { initialState, counterReducer }; 
