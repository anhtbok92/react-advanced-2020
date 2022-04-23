import React from 'react'
// 1-useState
import ErrorExample from './tutorial/1-useState/final/1-error-example';
import UseStateBasics from './tutorial/1-useState/final/2-useState-basics';
import UseStateArray from './tutorial/1-useState/final/3-useState-array';
import UseStateObject from './tutorial/1-useState/final/4-useState-object';

// 2-useEffect
import UseEffectBasics from './tutorial/2-useEffect/final/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/final/2-useEffect-cleanup';
import UseEffectFetchData from './tutorial/2-useEffect/final/3-useEffect-fetch-data';

// 3-condition-rendering
import MultipleReturns from './tutorial/3-conditional-rendering/final/1-multiple-returns';
import ShortCircuit from './tutorial/3-conditional-rendering/final/2-short-circuit';
import ShowHide from './tutorial/3-conditional-rendering/final/3-show-hide';

// 4-form
import ControlledInputs from './tutorial/4-forms/final/1-controlled-inputs';
import MultipleInputs from './tutorial/4-forms/final/2-multiple-inputs';

// 5-useRef
import UseRefBasics from './tutorial/5-useRef/final/1-useRef-basics';
import UseRefNoRerender from "./tutorial/5-useRef/final/2-useRef-no-rereder";
import UseForwardRef from "./tutorial/5-useRef/final/3-useRef-forwardRef";

// 6-useReducer
import CounterWithReducer from './tutorial/6-useReducer/final/1-counter-with-reducer';
import UseReducerForAddPeople from './tutorial/6-useReducer/final/2-index';

// 7-prop-drilling - Truyen props function xuong component con.
import PropDrilling from './tutorial/7-prop-drilling/final/1-prop-drilling';

// 8-useContext
import ContextAPI from './tutorial/8-useContext/final/1-context-api';

// 9-Custom-hooks
import Example from './tutorial/9-custom-hooks/final/1-fetch-example';

// 10-prop-types
import IndexPropType from './tutorial/10-prop-types/final/index';

// 11-react-router
import ReactRouterSetup from './tutorial/11-react-router/final/index';

// 12-memo-useMemo-useCallback
import Index12 from './tutorial/12-memo-useMemo-useCallback/final/index';

function App() {
  return (
    <div className='container'>
      {/*<h2>Advanced Tutorial</h2>*/}
      {/*<ContextAPI />*/}
       <Example />
    </div>
  )
}

export default App
