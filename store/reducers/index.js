import products from "./productsReducer";
import markets from "./marketsReducer";
import user from "./userReducer";

const { combineReducers } = require("redux");

export default combineReducers({ products, markets, user });
