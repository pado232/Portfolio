const initialState = {
  isLocked: true,
};

const lockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOCK":
      return { ...state, isLocked: true };
    case "UNLOCK":
      return { ...state, isLocked: false };
    default:
      return state;
  }
};

export default lockReducer;
