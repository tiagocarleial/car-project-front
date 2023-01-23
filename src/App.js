import logocar from './logocar.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row" id="row-header">
          <div class="col-lg-2"></div>
            <img src={logocar} className="App-logocar" alt="logo" />
        </div>
      </div>
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
