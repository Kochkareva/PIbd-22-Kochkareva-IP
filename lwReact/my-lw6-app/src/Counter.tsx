import React, { useState } from "react";

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
        <button onClick={handleIncrease}>Дать 1 рыбку</button>
        <button onClick={MinusCounter}>Отнять 1 рыбку</button>
      </p>
    </div>
  );
};
export default Counter;
