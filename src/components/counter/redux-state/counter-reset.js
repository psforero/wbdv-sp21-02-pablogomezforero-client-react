import React from 'react'
import {connect} from 'react-redux'

const CounterReset = ({reset}) =>
  <button onClick={reset}>
    Reset
  </button>

const stpm = (state) => {
};
const dtpm = (dispatch) => {
  return {
    reset: () => {
      dispatch({type: 'RESET'});
    }
  }
}

export default connect(stpm, dtpm)(CounterReset);