import products from "./productsReducer";
import markets from "./marketsReducer";

const { combineReducers } = require("redux");

export default combineReducers({ products, markets });
