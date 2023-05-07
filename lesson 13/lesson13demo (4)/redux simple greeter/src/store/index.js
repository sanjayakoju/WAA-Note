import {createStore} from 'redux';

const reducer = (state = {greeting : 'Hello' }, action ) => {
  if (action.type === 'getgreeting'){
      return { greeting : "Hello "+action.name};
  }
  return state;
}

const store = createStore(reducer);

export default store;