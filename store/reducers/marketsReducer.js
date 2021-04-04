import { ADD_MARKETS } from "../constants";
const initialState = {
  all: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKETS:
      const markets = action.payload.sort((a, b) => {
        var arrA = [];
        arrA = arrA.concat(a.fecha.split("-"), a.hora.split(":"));
        var arrB = [];
        arrB = arrB.concat(b.fecha.split("-"), b.hora.split(":"));
        let dateA = new Date(
            Number(arrA[0]),
            Number(arrA[1]) - 1,
            Number(arrA[2]),
            Number(arrA[3]),
            Number(arrA[4]),
            Number(arrA[5])
          ),
          dateB = new Date(
            Number(arrB[0]),
            Number(arrB[1]) - 1,
            Number(arrB[2]),
            Number(arrB[3]),
            Number(arrB[4]),
            Number(arrB[5])
          );
        return dateB - dateA;
      });
      return { ...state, all: markets };

    default:
      return state;
  }
};
