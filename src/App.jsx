import React, { Component } from 'react';
import './App.css';
import request from 'superagent'


request.get("/api/specs").end((err, res)=>{
   if(err) {
       console.log(err)
   } else {
       console.log(res)
   }

});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React 2  </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
