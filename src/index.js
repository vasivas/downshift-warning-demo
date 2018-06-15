import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";

import "./styles.css";

/// reducers
const initialState = {
  items: [
    { id: 0, label: "a" },
    { id: 1, label: "b" },
    { id: 2, label: "c" },
    { id: 3, label: "d" },
    { id: 4, label: "e" },
    { id: 5, label: "f" }
  ]
};
function form(prevState = initialState, action) {
  if (action.type === "delete") {
    let items = prevState.items.filter(item => item.id !== action.id);

    return { items };
  }

  return prevState;
}

/// store

let reducers = combineReducers({
  form
});

let store = createStore(reducers);

///

const mapStateToProps = state => ({
  items: state.form.items
});

const Form = connect(mapStateToProps)(({ items }) => {
  return <div>{items.map(({ id, label }) => <div>{label}</div>)}</div>;
});

///

const App = () => (
  <Provider store={store}>
    <Form />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
