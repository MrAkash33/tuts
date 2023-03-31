import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux'
import Count from './component/count';
import { addItem } from './redux/slices/countSlice';
function App() {

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>hello</h1>
        <button onClick={(e) => dispatch(addItem({ type: "INCREMENT_COUNT" }))}>
        Increment
      </button>
      <Count />
      <button onClick={(e) => dispatch(addItem({ type: "DECREMENT_COUNT" }))}>
        Decrement
      </button>
    </div>
  );
}

export default App;
