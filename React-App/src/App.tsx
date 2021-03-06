import * as React from 'react';
import logo from './logo.svg';
import TodoViewContainer from './containers/TodoViewContainer';
import './App.css'; 

//https://stackoverflow.com/questions/33505992/babel-6-changes-how-it-exports-default/33506169#33506169
const shared = require('../../shared/lib/index');
const BoilerplateComponent = shared.BoilerplateComponent;
const OtherComponent = shared.RandomComponent;

const another_shared = require('../../another_shared/lib/index');
const Foocomponent = another_shared.FooComponent;

export interface AppState {
  show: boolean;
}

class App extends React.Component {

  readonly state = {
    show: false,
  };

  public render() {

    console.log(process.env);
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoViewContainer />
        <button
          className="btn btn-error"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}>{this.state.show ? 'hide the shared component' : 'do y want to show shared component?'}
        </button>
       {this.state.show && <BoilerplateComponent />}
        {this.state.show && <OtherComponent />}

        <Foocomponent />

      </div>
    );
  }
}

export default App;