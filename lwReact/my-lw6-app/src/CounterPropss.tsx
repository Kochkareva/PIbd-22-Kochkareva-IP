import React, { useState } from "react";

interface CounterProps {
  start: number;
  step: number;
}

var CounterProp = (props : CounterProps) => {
  var [count, setCount] = useState(props.start);
  var CountProp = () => {
    setCount(count + props.step);
  };
  return (
    <div>
      Счетчик с определенным шагом: {count}
      <p>
        <button onClick={CountProp}>+5</button>
      </p>
    </div>
  );
};
export default CounterProp;