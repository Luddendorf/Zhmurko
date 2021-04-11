import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hello amigo
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
      <div>
        // <Greetings firstName="Bob" lastName="Johnson"  />
        <SimpleForm />
      </div>
    </div>
  );
}

export default App;
