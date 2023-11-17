import { createSlice, configureStore } from "@reduxjs/toolkit";
// const { createStore } = require("redux");

const initailState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initailState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// function counterReducer(state = initailState, action) {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   } else if (action.type === "increase") {
//     return { counter: state.counter + action.amount, showCounter: state.showCounter };
//   } else if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   } else if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// }

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
