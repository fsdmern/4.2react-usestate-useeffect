import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Inside Class Component</h1>
        <h3>I am calling Names Function</h3>
        <Names />
      </div>
    );
  }
}

function Names() {
  const name = 'Ajay';
  return (
    <div>
      <p>Reached Names function</p>
      <Welcome name={name} />
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <p>Reached Welcome function</p>
      <p> Hello, {props.name}</p>
    </div>
  );
}

export default ClassComponent;
