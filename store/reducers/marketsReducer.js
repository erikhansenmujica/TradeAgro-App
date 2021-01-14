import { ADD_MARKETS } from "../constants";
const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKETS:
      const markets = action.payload.sort((a, b) => {
        let dateA = new Date(a.fecha), dateB = new Date(b.fecha)
        return dateB - dateA;
      });
      return { ...state, all: markets };

    default:
      return state;
  }
};
