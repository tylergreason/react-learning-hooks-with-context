import Store from './store/Store';
import './App.css';
import ClickCounter from './components/ClickCounter';
import ShowState from './components/ShowState';

function App() {
  return (
    <Store>

    <div className="App">
        <p>
          Edit <b><code>src/App.js</code></b> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <ClickCounter></ClickCounter>
        <ShowState></ShowState>
    </div>
          </Store>
  );
}

export default App;
