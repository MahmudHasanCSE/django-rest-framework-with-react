// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    todo: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const todo = await res.json();
      this.setState({
        todo
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.todo.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

//---------------------------------------------------------------------------------------

//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//class App extends Component {
//  render() {
//    return (
//      <div className="App">
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
//      </div>
//    );
//  }
//}
//
//
//
//export default App;
