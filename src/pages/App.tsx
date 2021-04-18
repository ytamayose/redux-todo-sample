import React from 'react';
import logo from './assets/logo.svg'; // <-- 修正
import { BrowserRouter as Router, Route } from 'react-router-dom'; // <-- 追記
import { Counter } from './counter/Counter'; // <-- 修正
import Todo from './todo/TodoApp'; // <-- 追記
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Route exact path="/" component={Counter} />
          <Route exact path="/todo" component={Todo} />
        </Router>
        {/* --- ここから削除 ---
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        --- ここまで --- */}
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
