import { createStore } from 'redux';

const initalstate = { counter: 0, greeting: 'Hello' };

const counterReducer = (state = initalstate, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      greeting: state.greeting
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      greeting: state.greeting
    };
  }
  if (action.type === 'getgreeting') {
    return {
      counter: state.counter,
      greeting: "Hello " + action.name
    };
  }
  return state;
}

const store = createStore(counterReducer);

export default store;