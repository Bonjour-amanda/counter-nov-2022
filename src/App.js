import React, {useState} from 'react';
import './App.css';
import ReactWebComponent from 'react-web-component';
// import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Counter">
      <button onClick={() => setCount((count) => count + 1)}>Up</button>
      <button onClick={() => setCount((count) => count - 1)}>Down</button>
      <span>{`Result : ${count}`}</span>
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <Counter/>;
//   }
// }

ReactWebComponent.create(<App />, 'my-component');

export default App;
