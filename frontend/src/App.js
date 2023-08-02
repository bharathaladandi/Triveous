import logo from './logo.svg';
import './App.css';

//Key = 1c016e7fa3204a229b71a37b45a1eb23


// API = https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1c016e7fa3204a229b71a37b45a1eb23
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
