// import logo from './logo.svg';
import React, {Component} from 'react';
import User from './components/User';
import './App.css';

class App extends Component() {
  
  render(){

    return (
    
      <div className="App">
  
  
          <h2>App Component</h2>  
          <User/>
  
          {/* <h1>Hello world</h1>  
          <h1 className="demo">Test</h1>
          <h1>1+1</h1>
          <h1>{1+1}</h1>
          <h1>"Rza".toUpperCase()</h1>
          <h1>{"Rza".toUpperCase()}</h1> */}
  
      </div>
      
    );
  }
  
}

export default App;
