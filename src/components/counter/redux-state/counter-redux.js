import React from 'react';
import CounterDisplay from './counter-display'
import CounterUp from './counter-up';
import CounterDown from './counter-down';
import CounterReset from "./counter-reset";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  count: 234
};

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'UP':
      return {
        count: prevState.count + 1
      };
    case 'DOWN':
      return {
        count: prevState.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return prevState;
  }
};

const store = createStore(reducer);

const CounterRedux = () =>
  <Provider store={store}>
    <div>
      <CounterDisplay/>
      <CounterUp/>
      <CounterDown/>
      <CounterReset/>
    </div>
  </Provider>

export default CounterRedux;