import React from 'react';

const Time = (props) => {
  const time = new Date();
  console.log(time);
  return (
    <div>
      <h1>I am inside Time Component</h1>
      <h2>Current Time is: {new Date().toLocaleTimeString()}</h2>
      <p>Count from Time Component: {props.count}</p>
    </div>
  );
};

export default Time;
