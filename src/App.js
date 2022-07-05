import logo from './logo.svg';
import './App.css';

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}
function App() {
  return (
//     <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//            className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//            rel="noopener noreferrer"
//          >
//            Learn React
//          </a>
//        </header>
//     </div>
    <div>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
      <nav>
        <ol>
          <li><a href="/read/1">html</a></li>
          <li><a href="/read/2">css</a></li>
          <li><a href="/read/3">js</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
