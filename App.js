import * as React from "react"
import { Provider } from "react-redux";
import App from "./index";
import store from "./store";

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
