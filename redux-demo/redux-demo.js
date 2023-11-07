const redux = require("redux");

// reducer function define
const counterReducer = (state = { counter: 0 }, action) => {
  return { counter: state.counter + 1 };
};

// redux store define
const store = redux.createStore(counterReducer);

// redux subscriber define
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
