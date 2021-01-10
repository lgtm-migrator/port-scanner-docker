const Reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_PORTS":
      return {
        ...state,
        openedPorts: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "RESULTS":
      return {
        ...state,
        results: action.payload,
      };
    case "HOST":
      return {
        ...state,
        host: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
