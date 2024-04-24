import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector } from "react-redux"
import { Increment, Decrement } from './redux/CounterAction';
function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
     <h1>
      Redux Counter-App
     </h1>
     <div className="counter">
    <button  onClick={()=> dispatch(Increment())}>Increment</button>
    <span>
{counter}
    </span>
    <button onClick={()=> dispatch(Decrement())}>Decrement</button>
    </div>
    </div>
  );
}

export default App;
