const Reducer = (state, action) => {
  switch (action.type) {
    case "TEST_CASE":
      return {
        ...state,
        [action.key]: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;