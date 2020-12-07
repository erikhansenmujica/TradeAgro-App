import { ADD_MARKETS } from "../constants";
const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKETS:
      return { ...state, all: action.payload };

    default:
      return state;
  }
};
