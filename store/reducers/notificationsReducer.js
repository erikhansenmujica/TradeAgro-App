import { ADD_NOTIFICATIONS } from "../constants";
const initialState = {
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATIONS:
      return { ...state, number: action.payload ? state.number + 1 : 0 };
    default:
      return state;
  }
};
