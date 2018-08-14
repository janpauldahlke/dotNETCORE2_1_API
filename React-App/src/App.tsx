import * as React from 'react';
import logo from './logo.svg';
import TodoViewContainer from './containers/TodoViewContainer';
import './App.css'; 


class App extends React.Component {
  public render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <h1>consider this another todo app</h1>
        <TodoViewContainer />
      </div>
    );
  }
}

export default App;
