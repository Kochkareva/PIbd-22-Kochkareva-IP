import React, { useState } from "react";
import Button from './ButtonProps';

var Counter = () => {
  var [count, setCount] = useState(0);
  var handleIncrease = () => {
    setCount(count + 1);
  };
  var MinusCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount((count = 100));
    }
  };
  return (
    <div>
      Сколько рыбок съест котенок: {count}
      <p>        
        <Button text={"Дать 1 рыбку"} onClick={handleIncrease}/>
        <Button text={"Отнять 1 рыбку"} onClick={MinusCounter}/>
      </p>
    </div>
  );
};

export default Counter;
