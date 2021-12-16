import React, { useState } from 'react';
import Hello from './hello';

import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum, changeTheString } from '../Services/Actions';

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var [aString, setaString] = useState("Joy");

  const myState = useSelector((state) => {
    return state.changeNumber
  });
  const globalString = useSelector((state) => {
    return state.changeString
  });

  const dispatch = useDispatch();
  console.log("Hello");

  return (
    <div>
      <p>The global String is {globalString}</p>
      <input type="text" value={aString} onChange={ (e)=>{ setaString(aString= e.target.value)}} />
      <button onClick={()=> dispatch(changeTheString(aString))}>Change G String</button>
     
      <p>You clicked State {myState} times</p>
      <button onClick={() => dispatch(incNum(5))}>
        Click Redux State +
      </button>
      <button onClick={() => dispatch(decNum())}>
        Click Redux State -
      </button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me fc
      </button>
      <Hello name="fcComp" age={53} increment={2} />
    </div>
  );
}


export default Example