import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'Tang':
      return state + 1;
    case 'Giam':
      return state - 1;
    case 'Xoa':
      return 0;
    default : 
    return state;
  }
}

function App() {
  const [count, dispath] = useReducer(reducer, 0)

  return (
    <div className="App">
      <h1> count  : {count}</h1>
      <button onClick={() => dispath('Tang')}>Tang</button>
      <button onClick={() => dispath('Giam')}>Giam</button>
      <button onClick={() => dispath('Xoa')}>Xoa</button>
      <input type='number' onChange={()=> dispath()}/>
    </div>
  );
}

export default App;
