import products from "./productsReducer";
import markets from "./marketsReducer";
import user from "./userReducer";
import notifications from "./notificationsReducer";

const { combineReducers } = require("redux");

export default combineReducers({ products, markets, user, notifications });
