import React, {useEffect, useState} from 'react';
import Time from './Time';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h1>I am inside Use State Example:</h1>
        <p>You clicked {count} times </p>
        <button onClick={handleClick}>Click to Increase Count</button>
        <Time count={count} />
      </div>
    </div>
  );
};

export default Counter;
