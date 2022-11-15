import './App.css';
import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';

function App() {
  // const user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   src: 'https://plus.unsplash.com/premium_photo-1663091946297-8050202e1a63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          My name is: {user.firstName}, {user.lastName}{' '}
        </p>
        <img src={user.src} alt="" srcset="" /> */}
        <Counter />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
