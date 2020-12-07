import axios from "axios";
import { ADD_MARKETS, URL } from "../constants";

const addMarkets = (markets) => ({
  type: ADD_MARKETS,
  payload: markets,
});

export const fetchMarkets = () => (dispatch) =>
  axios
    .get(`${URL}/markets/all`)
    .then((markets) => {
      dispatch(addMarkets(markets.data.mercados));
    })
    .catch(console.log);
